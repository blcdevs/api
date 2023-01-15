import { Module } from '@nestjs/common';
import { CoinApiService } from './coin-api.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SocketGateway } from '../gateway/socket.gateway';

import { DatabaseModule } from '../database/database.module';

import { ExchangeService } from '../exchange/exchange.service';
import { CurrencyService } from '../currency/currency.service';
import { SymbolService } from '../symbol/symbol.service';

import { ExchangeProvider } from '../database/models/exchange/exchange.provider';
import { CurrencyProvider } from '../database/models/currency/currency.provider';
import { SymbolProvider } from '../database/models/symbol/symbol.provider';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        baseURL: config.get('API_BASE'),
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      inject: [ConfigService],
    }),
    DatabaseModule,
  ],
  providers: [
    CoinApiService,
    SocketGateway,
    ExchangeService,
    CurrencyService,
    SymbolService,
    ...ExchangeProvider,
    ...CurrencyProvider,
    ...SymbolProvider,
  ],
})
export class CoinApiModule {}
