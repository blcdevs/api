import { Injectable, Inject } from '@nestjs/common';
import { CurrencyDTO } from './currency.interface';
import { Model } from 'mongoose';

@Injectable()
export class CurrencyService {
  constructor(
    @Inject('CURRENCY_MODEL')
    private currencyModel: Model<CurrencyDTO>,
  ) {}

  getCurrencies(): Promise<CurrencyDTO[]> {
    return this.currencyModel.find().exec();
  }
}
