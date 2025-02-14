// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import dbConfig from './config/database.config';
import commonConfig from './config/common.config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SeederService } from './seeder/seeder.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [dbConfig, commonConfig],
    }),
    DatabaseModule,
    AuthModule,
    UsersModule,
  ],
  providers: [SeederService],
})
export class AppModule {}
