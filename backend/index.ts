import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

import { router } from './api/router/routerIndex';

app.use("/api", router);

const PORT: number = parseInt(process.env.EXPRESS_PORT as string, 10);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json({ limit: "1000mb" }))

// Enable CORS
app.use(cors());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});

