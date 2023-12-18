import React from 'react';
import { useState } from 'react';
import { WINNING_COMBINATIONS } from '../initials';


const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export const GameBoard = ({players, changeTurn, updateHistory, handleWinner}) => {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    const activePlayer = players.filter(x => x.isActive == true)[0].sign;
    const activePlayerName = players.filter(x => x.isActive == true)[0].name;
    const activePlayerSign = players.filter(x => x.isActive == true)[0].sign;

    function handleClickGameBoard(rowIndex, colIndex){
        setGameBoard((prevGameBoard) => {
            const upatedGameBoard = [...prevGameBoard].map((innerArray) => [...innerArray]);
            if(upatedGameBoard[rowIndex][colIndex] == null){
                upatedGameBoard[rowIndex][colIndex] = activePlayer;   
            }
            return upatedGameBoard;
        })
    }

    function checkForWinner(){
        
        handleWinner(activePlayer);
    }
    

  return (
    <div className='game-board' >
        {gameBoard.map((row, rowIndex) => (
            <ul key={rowIndex}>
                {row.map((col, colIndex) => (
                    <li key={colIndex}
                        onClick={() => {
                            handleClickGameBoard(rowIndex, colIndex)
                            if(col == null){
                                changeTurn();
                                checkForWinner();
                                updateHistory(activePlayerName, activePlayerSign, rowIndex, colIndex);
                            }
                        }} >
                        {col}
                    </li>
                ))}
            </ul>
        ))}
    </div>
  )
}
