import { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const api_key = import.meta.env.RIOT_API_KEY;
  const accountAPI = 'https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id';

  async function getPUUID() {
    try {
      const gameName: string = 'Headless';
      const tagLine: string = 'shao';
      const response = await axios.get(`${accountAPI}/${gameName}/${tagLine}?api_key=${api_key}`);
      window.console.log(response);
    } catch (error: any) {
      window.console.error(error);
    }
  }

  /*
  useEffect(() => {
    async function getPUUID(gameName: string, tagLine: string) {
      try {
        const res = await axios.get(`${accountAPI}/${gameName}/${tagLine}?api_key=${api_key}`);
        window.console.log(res);
        setLoading(false);
      } catch (error: any) {
          console.error(error);
          setError(error);
      }
    };
  }, []);
  */

  return (
    <>
      <div className="landing-page">
        <h1>Landing</h1>
        <label>Search for your League of Legends Profile</label>
        <input type="search" id="site-search" />
        <button onClick={getPUUID}>FIND</button>
      </div>
    </>
  );
};

export default Search;
