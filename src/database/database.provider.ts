import mongoose from 'mongoose';
import { ConfigService } from '@nestjs/config';

export const DatabaseProvider = [
  {
    provide: 'DATABASE_PROVIDER',
    inject: [ConfigService],
    useFactory: async (config: ConfigService) =>
      mongoose.connect(config.get('DB_URL')),
  },
];
