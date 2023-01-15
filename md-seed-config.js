import mongoose from 'mongoose';

const DB_NAME = process.env.DB_URL || 'mongodb://localhost:27017/exchange_rates';

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
export const seedersList = {

};
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
export const connect = async () =>
  await mongoose.connect(DB_NAME, { useNewUrlParser: true });
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
export const dropdb = async () => mongoose.connection.db.dropDatabase();
