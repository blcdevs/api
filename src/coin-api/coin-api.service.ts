import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { SocketGateway } from '../gateway/socket.gateway';
import { ExchangeService } from '../exchange/exchange.service';

@Injectable()
export class CoinApiService {
  private readonly logger = new Logger(CoinApiService.name);

  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
    private readonly socket: SocketGateway,
    private readonly exchangeService: ExchangeService,
  ) {}
  @Cron('*/300 * * * * *')
  async fetchRates() {
    const symbols = ['BTC', 'ETH'];
    const targets = ['USD', 'EUR', 'GBP'];

    const currencyRates = await Promise.all(
      targets.map((target: string) => {
        return this.http.axiosRef.get(`/live`, {
          params: {
            access_key: this.config.get('API_KEY'),
            target,
            symbols: symbols.join(','),
          },
        });
      }),
    );
    const rows = currencyRates.map((currency) => currency.data);

    // const data = {
    //   success: true,
    //   terms: 'https://coinlayer.com/terms',
    //   privacy: 'https://coinlayer.com/privacy',
    //   timestamp: 1673397066,
    //   target: 'USD',
    //   rates: { BTC: 17473.54226, ETH: 1330.925375 },
    // };

    for (const row of rows) {
      const { target, rates, timestamp } = row;
      for (const symbol of symbols) {
        const symbolData = {
          currency: target,
          symbol,
          rate: rates[symbol],
          dateTime: new Date(timestamp * 1000),
        };
        await this.exchangeService.saveExchangeRate(symbolData);
      }
    }

    this.socket.emitData('live-data', rows);
  }
}
