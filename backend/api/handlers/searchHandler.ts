import { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export async function getPUUID(req: Request, res: Response) {
  const summonerNameAPI: string = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name';
  const summonerName: string = 'HeadlessClient';
  const api_key = process.env.RIOT_API_KEY;
  const requestURL = `${summonerNameAPI}/${summonerName}?api_key=${api_key}`;

  const response = await axios.get(requestURL)
    .then(response => res.send(response.data))
    .catch(error => console.error(error));
}
