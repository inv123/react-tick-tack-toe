import React from 'react';
import { useState } from 'react';


const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export const GameBoard = ({turn, setPlayerMove}) => {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleClickBoard(rowIndex, colIndex, symbol){
        setPlayerMove()
        setGameBoard((prevGameBoard) => {
            const updatedGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
            if(turn === 'X'){
                updatedGameBoard[rowIndex][colIndex] = "X";

            }else{
                updatedGameBoard[rowIndex][colIndex] = "O";

            }
            return updatedGameBoard
        })
    }

  return (
    <div className='game-board' >
        {gameBoard.map((row, rowIndex) => (
            <ul key={rowIndex}>
                {row.map((col, colIndex) => (
                    <li key={colIndex} onClick={() => handleClickBoard(rowIndex, colIndex)}>{col}</li>
                ))}
            </ul>
        ))}
    </div>
  )
}
