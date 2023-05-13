import { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export async function getAllChampions(req: Request, res: Response) {
  res.send('getAllChampions');
}
