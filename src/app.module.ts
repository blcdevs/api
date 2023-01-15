import { Module } from '@nestjs/common';

import { SocketModule } from './gateway/socket.module';
import { CoinApiModule } from './coin-api/coin-api.module';
import { DatabaseModule } from './database/database.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import { ExchangeModule } from './exchange/exchange.module';
import { CurrencyModule } from './currency/currency.module';
import { SymbolModule } from './symbol/symbol.module';

@Module({
  imports: [
    DatabaseModule,
    SocketModule,
    ScheduleModule.forRoot(),
    CoinApiModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    ExchangeModule,
    CurrencyModule,
    SymbolModule,
  ],
})
export class AppModule {}
