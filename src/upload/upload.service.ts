import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { timeStamp } from 'console';

@Injectable()
export class UploadService {
    private readonly s3Client = new S3Client({
        region: this.configService.getOrThrow('AWS_S3_REGION'),
    })
    constructor(private readonly configService: ConfigService) { }

    async upload(filename: string, file: Buffer) {
        await this.s3Client.send(
            new PutObjectCommand({
                // Bucket: this.configService.getOrThrow('AWS_BUCKET'),
                Bucket: 'project-uploader',
                Key: this.configService.getOrThrow('AWS_ACCESS_KEY_ID'),
                Body: file,
            })
        )
    }
} 
