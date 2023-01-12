import * as mongoose from 'mongoose';

export const ExchangeSchema = new mongoose.Schema({
  currency: { type: String, required: true },
  symbol: { type: String, required: true },
  rate: { type: Number, required: true },
  dateTime: { type: Date, required: true },
});
