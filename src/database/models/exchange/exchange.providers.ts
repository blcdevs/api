import { Connection } from 'mongoose';
import { ExchangeSchema } from './exchange.model';

export const ExchangeProviders = [
  {
    provide: 'EXCHANGE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Exchange', ExchangeSchema),
    inject: ['DATABASE_PROVIDER'],
  },
];
