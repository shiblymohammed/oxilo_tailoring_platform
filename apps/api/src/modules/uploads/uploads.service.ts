import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v4 as uuid } from 'uuid';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class UploadsService {
  private readonly logger = new Logger(UploadsService.name);
  private readonly useLocal: boolean;
  private readonly localDir: string;
  private readonly publicUrl: string;

  constructor(private config: ConfigService) {
    const endpoint  = config.get('STORAGE_ENDPOINT');
    const accessKey = config.get('STORAGE_ACCESS_KEY');
    this.useLocal   = !endpoint || !accessKey;
    this.localDir   = path.join(process.cwd(), 'uploads');

    if (this.useLocal) {
      // Always use the NestJS FilesController route for local files
      this.publicUrl = '/api/files';
      fs.mkdirSync(this.localDir, { recursive: true });
      this.logger.log('Using local disk storage → files served at /api/files/...');
    } else {
      this.publicUrl = config.get('STORAGE_PUBLIC_URL') || '';
    }
  }

  async upload(file: Express.Multer.File, folder = 'general'): Promise<{ url: string; key: string }> {
    const ext = file.originalname.split('.').pop() || 'bin';
    const key = `${folder}/${uuid()}.${ext}`;

    if (this.useLocal) {
      const dir = path.join(this.localDir, folder);
      fs.mkdirSync(dir, { recursive: true });
      const filename = path.basename(key);
      fs.writeFileSync(path.join(dir, filename), file.buffer);
      return { url: `${this.publicUrl}/${key}`, key };
    }

    // S3 / Cloudflare R2
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

    return { url: `${this.publicUrl}/${key}`, key };
  }

  async delete(key: string) {
    if (this.useLocal) {
      try { fs.unlinkSync(path.join(this.localDir, key)); } catch { /* ignore */ }
      return;
    }
    const AWS = await import('aws-sdk');
    const s3 = new AWS.S3({
      endpoint: this.config.get('STORAGE_ENDPOINT'),
      accessKeyId: this.config.get('STORAGE_ACCESS_KEY'),
      secretAccessKey: this.config.get('STORAGE_SECRET_KEY'),
    });
    await s3.deleteObject({ Bucket: this.config.get('STORAGE_BUCKET', 'oxilo-uploads'), Key: key }).promise();
  }
}
