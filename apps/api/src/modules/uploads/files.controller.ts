import {
  Controller, Get, Param, Res, NotFoundException,
} from '@nestjs/common';
import { Response } from 'express';
import { createReadStream } from 'fs';
import * as path from 'path';
import * as fs from 'fs';

const MIME: Record<string, string> = {
  webm: 'audio/webm', ogg: 'audio/ogg', mp4: 'audio/mp4', m4a: 'audio/mp4',
  png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', gif: 'image/gif', webp: 'image/webp',
};

/**
 * Serves uploaded files from ./uploads/ directory.
 * No auth required — files are public by URL.
 * GET /api/files/:folder/:filename
 */
@Controller('files')
export class FilesController {
  private readonly uploadsDir = path.join(process.cwd(), 'uploads');

  @Get(':folder/:filename')
  serveFile(
    @Param('folder') folder: string,
    @Param('filename') filename: string,
    @Res() res: Response,
  ) {
    const safeFolder   = path.basename(folder);
    const safeFilename = path.basename(filename);
    const filePath     = path.join(this.uploadsDir, safeFolder, safeFilename);

    if (!fs.existsSync(filePath)) {
      throw new NotFoundException('File not found');
    }

    const ext = safeFilename.split('.').pop()?.toLowerCase() ?? '';
    const contentType = MIME[ext] ?? 'application/octet-stream';
    res.setHeader('Content-Type', contentType);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
    // Support range requests for audio seeking
    res.setHeader('Accept-Ranges', 'bytes');

    createReadStream(filePath).pipe(res);
  }
}
