import { Injectable, Inject } from '@nestjs/common';
import { SymbolDTO } from './symbol.interface';
import { Model } from 'mongoose';

@Injectable()
export class SymbolService {
  constructor(
    @Inject('SYMBOL_MODEL')
    private symbolModel: Model<SymbolDTO>,
  ) {}

  getSymbols(): Promise<SymbolDTO[]> {
    return this.symbolModel.find().exec();
  }
}
