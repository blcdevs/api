import { Module } from '@nestjs/common';
import { DatabaseProvider } from './database.provider';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [...DatabaseProvider, ConfigService],
  exports: [...DatabaseProvider],
})
export class DatabaseModule {}
