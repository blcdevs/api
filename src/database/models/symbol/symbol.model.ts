import * as mongoose from 'mongoose';

export const SymbolSchema = new mongoose.Schema({
  label: { type: String, required: true },
  dateTime: { type: Date, required: true, default: Date.now() },
});
