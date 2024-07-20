import { useParams } from "react-router-dom"
import { PlayerObject } from "../types/types"
import { getPlayerByName } from "../backendTest"
import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import "../styles/PlayerPage.css";
import { fetchMainColor, fetchSecondaryColor } from "../styles/fetchColors";
function PlayerPage() {
    const [player, setPlayer] = useState<PlayerObject>();
    const mainColorRef = useRef("");
    const secondaryColorRef = useRef("");
    const { name } = useParams()

    useEffect(() => {
      async function getPlayer(name: string){
        const playerRes = await getPlayerByName(name);
        secondaryColorRef.current = fetchSecondaryColor(playerRes.teamAbbreviation)
        mainColorRef.current = fetchMainColor(playerRes.teamAbbreviation)
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
      <>
        <Header/>
        <div className="playerPage" style={{backgroundColor: secondaryColorRef.current}}>
          <div className="leftColumn" style={{backgroundColor: mainColorRef.current}}></div>
          <div className="playerInfo"></div>
            Player is {player.name}
            <img className="playerHeadshot" src={`${player.headshotURL}`} alt="Player Image"/>
          <div className="rightColumn" style={{backgroundColor: mainColorRef.current}}></div>
      </div>
      </>
    )
  }
  
  export default PlayerPage