import express from 'express';
const router = express.Router();

import * as championsHandler from '../../handlers/championsHandler';

router.get('/all', championsHandler.getAllChampions);

export { router as championsRoute };
