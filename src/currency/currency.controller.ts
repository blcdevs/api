import { Controller, Get } from '@nestjs/common';
import { CurrencyService } from './currency.service';

@Controller()
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get('/currencies')
  async getCurrencies() {
    const currencies = await this.currencyService.getCurrencies();
    return {
      status: 'success',
      message: 'request successful',
      data: currencies,
    };
  }
}
