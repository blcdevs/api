import { Module } from '@nestjs/common';
import { CoinApiService } from './coin-api.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SocketGateway } from '../gateway/socket.gateway';
import { ExchangeService } from '../exchange/exchange.service';
import { DatabaseModule } from '../database/database.module';
import { ExchangeProviders } from '../database/models/exchange/exchange.providers';

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
    ...ExchangeProviders,
  ],
})
export class CoinApiModule {}
