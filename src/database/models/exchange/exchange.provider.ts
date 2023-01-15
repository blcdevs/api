import { Connection } from 'mongoose';
import { ExchangeSchema } from './exchange.model';

export const ExchangeProvider = [
  {
    provide: 'EXCHANGE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Exchange', ExchangeSchema),
    inject: ['DATABASE_PROVIDER'],
  },
];
