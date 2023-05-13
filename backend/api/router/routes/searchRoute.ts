import express from 'express';
const router = express.Router();

import * as searchHandler from '../../handlers/searchHandler';

router.get('/', searchHandler.getPUUID);

export { router as searchRoute }
