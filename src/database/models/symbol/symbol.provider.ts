import { Connection } from 'mongoose';
import { SymbolSchema } from './symbol.model';

export const SymbolProvider = [
  {
    provide: 'SYMBOL_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Symbol', SymbolSchema),
    inject: ['DATABASE_PROVIDER'],
  },
];
