import { Controller, FileTypeValidator, Get, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
    constructor(private readonly uploadService: UploadService) { }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile(new ParseFilePipe({
        validators:[
        // new MaxFileSizeValidator({maxSize:4000}),
        // new FileTypeValidator({fileType:'Image/jpeg'})
    ]
    })) file:Express.Multer.File){
        await this.uploadService.upload(file.originalname, file.buffer)

        console.log(file);
    }
}
