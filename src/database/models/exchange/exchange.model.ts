import * as mongoose from 'mongoose';

export const ExchangeSchema = new mongoose.Schema({
  currency: { type: String, required: true },
  symbol: { type: String, required: true },
  amount: { type: Number, required: true },
  rate: { type: Number, required: true },
  exchangeType: { type: String, enum: ['live', 'exchange'], required: true },
  dateTime: { type: Date, required: true, default: Date.now() },
});
