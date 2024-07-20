import { useParams } from "react-router-dom"
import { PlayerObject } from "../types/types"
import { getPlayerByName } from "../backendTest"
import { useEffect, useState } from "react";

function PlayerPage() {
    const [player, setPlayer] = useState<PlayerObject>();
    const { name } = useParams()

    useEffect(() => {
      async function getPlayer(name: string){
        const playerRes = await getPlayerByName(name);
        console.log(playerRes)
        setPlayer(playerRes)
      }
      console.log(name)
      getPlayer(name as string)
    }, [])

    while(player === undefined){
      return(
        <div>
          Loading
        </div>
      )
    }
    return (
      <div>
        Player is {player?.name}
      </div>
    )
  }
  
  export default PlayerPage