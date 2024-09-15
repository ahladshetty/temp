import express from 'express'

const app = express();
app.use(express.json());

const port = 5005;

import connectToDatabase from './db.mjs';
import fetchGameData from './fetchGameData.mjs';

connectToDatabase()
  .then(() => {
    const apiKey = 'process.env.API_KEY';

    fetchGameData(apiKey);
  })
  .catch((error) => {
    console.error('Error setting up database connection:', error);
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
