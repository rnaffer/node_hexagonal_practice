import { Db } from 'mongodb';
import mongoose from 'mongoose';
import config from '../config';

const options = {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const url = config.databaseURL;

export default async (): Promise<Db> => {
    const connection = await mongoose.connect(url, options);

    return connection.connection.db;
}