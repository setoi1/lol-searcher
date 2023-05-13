import express from 'express';
const router = express.Router();

import * as championRotation from '../../handlers/championRotation';

router.get('/', championRotation.getChampionRotation);

export { router as championRotationRoute };
