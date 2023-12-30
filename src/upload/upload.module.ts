import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { ThrottlerGuard, ThrottlerModule, ThrottlerModuleOptions } from '@nestjs/throttler';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';

@Module({
    imports: [
        // ThrottlerModule.forRoot({
        //     burst: 5, // Number of requests that can burst beyond the rate limit
        //     limit: 10, // Rate limit (number of requests per TTL)
        //     ttl: 60, // Time window in seconds for the rate limit
        // }),
    ],
    controllers: [UploadController],
    providers: [UploadService,
    
],
})
export class UploadModule { }
