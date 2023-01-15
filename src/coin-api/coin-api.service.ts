import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { SocketGateway } from '../gateway/socket.gateway';

import { ExchangeService } from '../exchange/exchange.service';
import { ExchangeDTO } from '../exchange/exchange.interface';
import { CurrencyService } from '../currency/currency.service';
import { SymbolService } from '../symbol/symbol.service';

@Injectable()
export class CoinApiService {
  private readonly logger = new Logger(CoinApiService.name);

  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
    private readonly socket: SocketGateway,
    private readonly exchangeService: ExchangeService,
    private readonly symbolService: SymbolService,
    private readonly currencyService: CurrencyService,
  ) {}
  @Cron('*/300 * * * * *')
  async fetchRates() {
    const [symbols, currencies] = await Promise.all([
      this.symbolService.getSymbols(),
      this.currencyService.getCurrencies(),
    ]);

    const currencyRates = await Promise.all(
      currencies.map(({ label }: any) => {
        return this.http.axiosRef.get(`/live`, {
          params: {
            access_key: this.config.get('API_KEY'),
            target: label,
            symbols: symbols.map((symbol) => symbol.label).join(','),
          },
        });
      }),
    );
    const rows = currencyRates.map((currency) => currency.data);

    for (const row of rows) {
      const { target, rates, timestamp } = row;
      for (const symbol of symbols) {
        const { label } = symbol;
        const symbolData: ExchangeDTO = {
          currency: target,
          symbol: label,
          amount: 1,
          rate: rates[label],
          exchangeType: 'live',
          dateTime: new Date(timestamp * 1000),
        };
        await this.exchangeService.saveExchangeRate(symbolData);
      }
    }

    this.socket.emitData('live-data', rows);
  }
}
