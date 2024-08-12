import axios from 'axios';
import { PlayerObject } from './types/types';

export async function getPlayerByName(name: string): Promise<PlayerObject>{
    const options = {
        method: 'GET',
        url: 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLPlayerInfo',
        params: {
          playerName: name,
          getStats: 'true'
        },
        headers: {
          'x-rapidapi-key': import.meta.env.VITE_RAPIDTABLE_KEY,
          'x-rapidapi-host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
        }
      };
      
      try {
          const response = (await axios.request(options)).data.body[0];
          const playerResponse: PlayerObject = {
              name: response.espnName,
              playerID: response.espnID,
              position: response.pos,
              gamesPlayed: response.stats.gamesPlayed,
              jerseyNumber: response.jerseyNum,
              headshotURL: response.espnHeadshot,
              injuryStatus: response.injury,
              freeAgentStatus: response.isFreeAgent,
              teamAbbreviation: response.team,
              rushingStats: response.stats.Rushing,
              passingStats: response.stats.Passing,
              receivingStats: response.stats.receivingStats
          }
            console.log('ran ' + name)
            return playerResponse
      } catch (error) {
          console.log(error)
          return {} as PlayerObject;
      }
}
