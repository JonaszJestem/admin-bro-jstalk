import mongoose from 'mongoose';
import { getConfig } from '../../config';

export const connectToDatabase = async () => {
  await mongoose.connect(getConfig().DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
