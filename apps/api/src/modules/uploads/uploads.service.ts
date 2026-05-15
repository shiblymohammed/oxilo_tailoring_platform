import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v4 as uuid } from 'uuid';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class UploadsService {
  private readonly logger = new Logger(UploadsService.name);
  private readonly localDir: string;
  private useLocal: boolean;

  constructor(private config: ConfigService) {
    const endpoint  = config.get('STORAGE_ENDPOINT');
    const accessKey = config.get('STORAGE_ACCESS_KEY');
    // Treat empty strings as not configured
    this.useLocal   = !endpoint?.trim() || !accessKey?.trim();
    this.localDir   = path.join(process.cwd(), 'uploads');

    // Always ensure local dir exists as fallback
    fs.mkdirSync(this.localDir, { recursive: true });

    if (this.useLocal) {
      this.logger.log('Using local disk storage → files served at /api/files/...');
    } else {
      this.logger.log(`Using S3/R2 storage → endpoint: ${endpoint}`);
    }
  }

  async upload(file: Express.Multer.File, folder = 'general'): Promise<{ url: string; key: string }> {
    const ext = file.originalname.split('.').pop() || 'bin';
    const key = `${folder}/${uuid()}.${ext}`;

    // Try S3 first if configured, fall back to local on failure
    if (!this.useLocal) {
      try {
        return await this.uploadToS3(file, key);
      } catch (err) {
        this.logger.warn(`S3 upload failed (${err.message}), falling back to local storage`);
        this.useLocal = true; // Switch to local for future uploads too
      }
    }

    return this.uploadLocal(file, key, folder);
  }

  private uploadLocal(file: Express.Multer.File, key: string, folder: string): { url: string; key: string } {
    const dir = path.join(this.localDir, folder);
    fs.mkdirSync(dir, { recursive: true });
    const filename = path.basename(key);
    fs.writeFileSync(path.join(dir, filename), file.buffer);
    this.logger.log(`Saved locally: ${key} (${file.size} bytes)`);
    return { url: `/api/files/${key}`, key };
  }

  private async uploadToS3(file: Express.Multer.File, key: string): Promise<{ url: string; key: string }> {
    const AWS = await import('aws-sdk');
    const s3 = new AWS.S3({
      endpoint: this.config.get('STORAGE_ENDPOINT'),
      accessKeyId: this.config.get('STORAGE_ACCESS_KEY'),
      secretAccessKey: this.config.get('STORAGE_SECRET_KEY'),
      s3ForcePathStyle: true,
      signatureVersion: 'v4',
    });
    await s3.upload({
      Bucket: this.config.get('STORAGE_BUCKET', 'oxilo-uploads'),
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
    }).promise();

    const publicUrl = this.config.get('STORAGE_PUBLIC_URL') || '';
    return { url: `${publicUrl}/${key}`, key };
  }

  async delete(key: string) {
    // Try local delete first
    const localPath = path.join(this.localDir, key);
    if (fs.existsSync(localPath)) {
      try { fs.unlinkSync(localPath); } catch { /* ignore */ }
      return;
    }

    // Try S3
    if (!this.useLocal) {
      try {
        const AWS = await import('aws-sdk');
        const s3 = new AWS.S3({
          endpoint: this.config.get('STORAGE_ENDPOINT'),
          accessKeyId: this.config.get('STORAGE_ACCESS_KEY'),
          secretAccessKey: this.config.get('STORAGE_SECRET_KEY'),
        });
        await s3.deleteObject({ Bucket: this.config.get('STORAGE_BUCKET', 'oxilo-uploads'), Key: key }).promise();
      } catch { /* ignore */ }
    }
  }
}
