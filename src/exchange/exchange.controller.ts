import { Controller, Get, Post } from '@nestjs/common';
import { ExchangeService } from './exchange.service';

@Controller()
export class ExchangeController {
  constructor(private readonly exchangeService: ExchangeService) {}

  @Get('/exchange-rates')
  async getExchangeRates() {
    const exchangeRates = await this.exchangeService.getExchangeRates();
    return {
      status: 'success',
      message: 'request successful',
      data: exchangeRates,
    };
  }

  @Post('/save-exchange')
  async saveExchange() {}
}
