import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

import { Currency } from './migrations/currency.seeder';
import { Symbol } from './migrations/symbol.seeder';

import { CurrencySchema } from './src/database/models/currency/currency.model';
import { SymbolSchema } from './src/database/models/symbol/symbol.model';
import { CurrencyDTO } from './src/currency/currency.interface';
import { SymbolDTO } from './src/symbol/symbol.interface';

const CurrencyModel =
  (mongoose.models.Quote as mongoose.Model<CurrencyDTO>) ||
  mongoose.model<CurrencyDTO>('Currency', CurrencySchema);
const SymbolModel =
  (mongoose.models.Quote as mongoose.Model<SymbolDTO>) ||
  mongoose.model<SymbolDTO>('Symbol', SymbolSchema);

dotenv.config({});

const url = process.env.DB_URL;

const fn = process.argv[2];
const importData = async () => {
  try {
    await CurrencyModel.deleteMany();
    await SymbolModel.deleteMany();

    await CurrencyModel.insertMany(Currency);
    await SymbolModel.insertMany(Symbol);

    console.log('Data imported');

    process.exit();
  } catch (error) {
    console.log('Data not imported', error.message);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await CurrencyModel.deleteMany();
    await SymbolModel.deleteMany();

    console.log('Data destroyed');
    process.exit();
  } catch (error) {
    console.log('Data not destroyed');
    process.exit(1);
  }
};

mongoose
  .connect(url)
  .then(async () => {
    console.log('DB Connected');
    if (fn === '-d') {
      await destroyData();
    } else {
      await importData();
    }
  })
  .catch((error) => console.log('DB Connection Failed', error.message));
