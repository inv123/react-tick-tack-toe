import React from 'react';
import '../src/style.css';
import { Player } from './components/Player';
import { GameBoard } from './components/GameBoard';
import { useState } from 'react';

export const App = () => {
    const [playerTurn, setPlayerTurn] = useState('X');

    function handlePlayerTurn(){
        playerTurn === 'X' ? setPlayerTurn('O') : setPlayerTurn('X')
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
                    <Player name='Player 1' sign={'X'} turn={playerTurn}></Player>
                    <Player name='Player 2' sign={'O'} turn={playerTurn}></Player>
                </div>

                {/* BOARD */}
                <GameBoard></GameBoard>
            </div>
        </div>
   </main>
  )
}
