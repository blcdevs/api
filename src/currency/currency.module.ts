import { Module } from '@nestjs/common';

import { CurrencyController } from './currency.controller';
import { CurrencyService } from './currency.service';

import { CurrencyProvider } from '../database/models/currency/currency.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [CurrencyService, ...CurrencyProvider],
  controllers: [CurrencyController],
})
export class CurrencyModule {}
