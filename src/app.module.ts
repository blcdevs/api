import { Module } from '@nestjs/common';

import { SocketModule } from './gateway/socket.module';
import { CoinApiModule } from './coin-api/coin-api.module';
import { DatabaseModule } from './database/database.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import { ExchangeModule } from './exchange/exchange.module';

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
  ],
})
export class AppModule {}
