import { Controller, Post, UseInterceptors, UploadedFile, UseGuards, Param, BadRequestException, Logger, InternalServerErrorException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth, ApiConsumes } from '@nestjs/swagger';
import { UploadsService } from './uploads.service';
import { PrismaService } from '../../database/prisma.service';
import { memoryStorage } from 'multer';

const UPLOAD_OPTS = {
  storage: memoryStorage(),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
};

@ApiTags('Uploads')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('uploads')
export class UploadsController {
  private readonly logger = new Logger(UploadsController.name);

  constructor(private uploadsService: UploadsService, private prisma: PrismaService) {}

  /** General file upload — returns { url, key } */
  @Post('file')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file', UPLOAD_OPTS))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    this.logger.log(`Upload request received — file: ${file ? `${file.originalname} (${file.mimetype}, ${file.size} bytes)` : 'MISSING'}`);

    if (!file) {
      this.logger.error('No file in request');
      throw new BadRequestException('No file provided');
    }

    if (!file.buffer) {
      this.logger.error(`file.buffer is missing! Keys: ${Object.keys(file).join(', ')}`);
      throw new InternalServerErrorException('File buffer unavailable');
    }

    try {
      const folder = file.mimetype.startsWith('audio') ? 'voice-notes' : 'ref-photos';
      this.logger.log(`Uploading to folder: ${folder}`);
      const result = await this.uploadsService.upload(file, folder);
      this.logger.log(`Upload success: ${result.url}`);
      return result;
    } catch (err) {
      this.logger.error(`Upload FAILED: ${err.message}`, err.stack);
      throw new InternalServerErrorException(`Upload failed: ${err.message}`);
    }
  }

  /** Attach uploaded photo to an order item */
  @Post('order-item/:itemId/photo')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file', UPLOAD_OPTS))
  async uploadOrderPhoto(@Param('itemId') itemId: string, @UploadedFile() file: Express.Multer.File) {
    if (!file) throw new BadRequestException('No file provided');
    try {
      const { url, key } = await this.uploadsService.upload(file, 'order-photos');
      return this.prisma.orderPhoto.create({ data: { orderItemId: itemId, url, key } });
    } catch (err) {
      this.logger.error(`Order photo upload FAILED: ${err.message}`, err.stack);
      throw new InternalServerErrorException(`Upload failed: ${err.message}`);
    }
  }
}
