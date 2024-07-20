import axios from 'axios';

export async function getPlayerByName(name: string): Promise<void>{
    const options = {
        method: 'GET',
        url: 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLPlayerInfo',
        params: {
          playerName: name,
          getStats: 'true'
        },
        headers: {
          'x-rapidapi-key': '4d46aa4523mshcb49dc405ba70eap1c9f03jsnc182c4c25176',
          'x-rapidapi-host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}
async function testing(){
    const options = {
        method: 'GET',
        url: 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLProjections',
        params: {
          week: 'season',
          archiveSeason: '2024',
          twoPointConversions: '2',
          passYards: '.04',
          passAttempts: '-.5',
          passTD: '4',
          passCompletions: '1',
          passInterceptions: '-2',
          pointsPerReception: '1',
          carries: '.2',
          rushYards: '.1',
          rushTD: '6',
          fumbles: '-2',
          receivingYards: '.1',
          receivingTD: '6',
          targets: '.1',
          fgMade: '3',
          fgMissed: '-1',
          xpMade: '1',
          xpMissed: '-1'
        },
        headers: {
          'x-rapidapi-key': '4d46aa4523mshcb49dc405ba70eap1c9f03jsnc182c4c25176',
          'x-rapidapi-host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}

getPlayerByName('Josh Allen')
