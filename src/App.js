import React from 'react';
import '../src/style.css';
import { Player } from './components/Player';
import { GameBoard } from './components/GameBoard';
import { useState } from 'react';
import { PLAYERS } from './initials';


export const App = () => {
   const [playerInfo, setPlayerInfo] = useState(PLAYERS) 
   
   function setNewPlayerName(sign, inputName){
       const updatePlayer = [...playerInfo].map((player) => {
            if(player.sign == sign){
                return {... player, name: inputName}
            }
            return player
       })
       setPlayerInfo(updatePlayer)
   }

   function handleChangeTurn(){
       const updatePlayer = [...playerInfo].map((player) => {
            const isActive = player.isActive
            return {...player, isActive: !isActive}
       })

       setPlayerInfo(updatePlayer)
   }
    
  return (
   <main>
        <div className='heading'>
            <h1>Tick Tack Toe</h1>
        </div>

        <div className='gaming-field-container'>
            <div className='gaming-field'>
                {/* PLAYERS */}
                <div className='players'>
                    {playerInfo.map((player, index) => (
                        <Player key={index} name={player.name} sign={player.sign} isActive={player.isActive} setNewPlayerName={setNewPlayerName}/>
                    ))}
                </div>

                {/* BOARD */}
                <GameBoard players={playerInfo} changeTurn={handleChangeTurn}></GameBoard>
            </div>
            <div className='chronology'>
                <h4>Chronology</h4>
                <ul>
                    {/* {chronology.map((history, index) => (
                        <li key={index}>{history.player} mark {history.mark} on row{history.row} and col {history.col}</li>
                    ))} */}
                </ul>
            </div>
        </div>
   </main>
  )
}
