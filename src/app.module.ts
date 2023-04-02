import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { DatabaseModule } from './db/db.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
