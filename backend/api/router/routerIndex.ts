import express from 'express';
const router = express.Router();

import { championRotationRoute } from './routes/championRotationRoute';
import { searchRoute } from './routes/searchRoute';
import { championsRoute } from './routes/championsRoute';

router.use('/championRotation', championRotationRoute);
router.use('/search', searchRoute);
router.use('/champions', championsRoute);

export { router };