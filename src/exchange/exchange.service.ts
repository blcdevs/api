import { Injectable, Inject } from '@nestjs/common';
import { Exchange } from './exchange.interface';
import { Model } from 'mongoose';

@Injectable()
export class ExchangeService {
  constructor(
    @Inject('EXCHANGE_MODEL')
    private exchangeModel: Model<Exchange>,
  ) {}

  getExchangeRates(): Promise<Exchange[]> {
    return this.exchangeModel.find().exec();
  }

  saveExchangeRate(exchangeRate: Exchange): Promise<Exchange> {
    const newExchange = new this.exchangeModel(exchangeRate);
    return newExchange.save();
  }
}
