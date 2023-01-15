import { Controller, Get, Post, Req, Request } from '@nestjs/common';
import { ExchangeService } from './exchange.service';
import { ExchangeDTO } from './exchange.interface';

@Controller()
export class ExchangeController {
  constructor(private readonly exchangeService: ExchangeService) {}

  @Get('/exchanges')
  async getExchangeRates() {
    const exchangeRates = await this.exchangeService.getExchangeRates();
    return {
      status: 'success',
      message: 'request successful',
      data: exchangeRates,
    };
  }

  @Post('/exchanges')
  async saveExchange(@Req() request: Request) {
    try {
      const { body } = request;

      const { amount, currency, symbol, rate } = body as any;
      const exchangePayload: ExchangeDTO = {
        currency,
        symbol,
        amount,
        rate,
        exchangeType: 'exchange',
        dateTime: new Date(),
      };

      const data = await this.exchangeService.saveExchangeRate(exchangePayload);
      return {
        status: 'success',
        message: 'request successful',
        data,
      };
    } catch (error) {
      throw error;
    }
  }
}
