import { Connection } from 'mongoose';
import { CurrencySchema } from './currency.model';

export const CurrencyProvider = [
  {
    provide: 'CURRENCY_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Currency', CurrencySchema),
    inject: ['DATABASE_PROVIDER'],
  },
];
