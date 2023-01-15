import { Injectable, Inject } from '@nestjs/common';
import { ExchangeDTO } from './exchange.interface';
import { Model } from 'mongoose';

@Injectable()
export class ExchangeService {
  constructor(
    @Inject('EXCHANGE_MODEL')
    private exchangeModel: Model<ExchangeDTO>,
  ) {}

  getExchangeRates(): Promise<ExchangeDTO[]> {
    return this.exchangeModel.find().sort({dateTime: -1}).exec();
  }

  saveExchangeRate(exchangeRate: ExchangeDTO): Promise<ExchangeDTO> {
    const newExchange = new this.exchangeModel(exchangeRate);
    return newExchange.save();
  }
}
