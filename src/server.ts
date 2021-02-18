import express from 'express';
import setupAdmin from './admin/admin';
import { config as readEnv } from 'dotenv';
import { connectToDatabase } from './modules/database/database';
import { getConfig } from './config';

readEnv();
const app = express();
const port = 3000;

const run = async (): Promise<void> => {
  await connectToDatabase();

  await setupAdmin(app);

  app.listen(getConfig().APP_PORT, () =>
    console.log(`Listening on port ${port}!`)
  );
};

run();
