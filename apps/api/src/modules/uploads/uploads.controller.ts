import { Controller, Post, UseInterceptors, UploadedFile, UseGuards, Param } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth, ApiConsumes } from '@nestjs/swagger';
import { UploadsService } from './uploads.service';
import { PrismaService } from '../../database/prisma.service';

const UPLOAD_OPTS = { limits: { fileSize: 20 * 1024 * 1024 } }; // 20MB

@ApiTags('Uploads')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('uploads')
export class UploadsController {
  constructor(private uploadsService: UploadsService, private prisma: PrismaService) {}

  /** General file upload — returns { url, key } */
  @Post('file')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file', UPLOAD_OPTS))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const folder = file.mimetype.startsWith('audio') ? 'voice-notes' : 'ref-photos';
    return this.uploadsService.upload(file, folder);
  }

  /** Attach uploaded photo to an order item */
  @Post('order-item/:itemId/photo')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file', UPLOAD_OPTS))
  async uploadOrderPhoto(@Param('itemId') itemId: string, @UploadedFile() file: Express.Multer.File) {
    const { url, key } = await this.uploadsService.upload(file, 'order-photos');
    return this.prisma.orderPhoto.create({ data: { orderItemId: itemId, url, key } });
  }
}
