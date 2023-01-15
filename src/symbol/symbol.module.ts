import { Module } from '@nestjs/common';

import { SymbolController } from './symbol.controller';
import { SymbolService } from './symbol.service';

import { SymbolProvider } from '../database/models/symbol/symbol.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [SymbolService, ...SymbolProvider],
  controllers: [SymbolController],
})
export class SymbolModule {}
