import { Module } from '@nestjs/common';

import { ExchangeController } from './exchange.controller';
import { ExchangeService } from './exchange.service';

import { ExchangeProviders } from '../database/models/exchange/exchange.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [ExchangeService, ...ExchangeProviders],
  controllers: [ExchangeController],
})
export class ExchangeModule {}
