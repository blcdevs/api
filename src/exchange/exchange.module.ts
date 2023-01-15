import { Module } from '@nestjs/common';

import { ExchangeController } from './exchange.controller';
import { ExchangeService } from './exchange.service';

import { ExchangeProvider } from '../database/models/exchange/exchange.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [ExchangeService, ...ExchangeProvider],
  controllers: [ExchangeController],
})
export class ExchangeModule {}
