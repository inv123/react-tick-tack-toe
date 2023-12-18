import React from 'react';
import { useState } from 'react';


const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export const GameBoard = ({players, changeTurn}) => {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    const activePlayer = players.filter(x => x.isActive == true)[0].sign;

    function handleClickGameBoard(rowIndex, colIndex){
        setGameBoard((prevGameBoard) => {
            const upatedGameBoard = [...prevGameBoard].map((innerArray) => [...innerArray]);
            upatedGameBoard[rowIndex][colIndex] = activePlayer;

            return upatedGameBoard
        })
    }

    

  return (
    <div className='game-board' >
        {gameBoard.map((row, rowIndex) => (
            <ul key={rowIndex}>
                {row.map((col, colIndex) => (
                    <li key={colIndex}
                        onClick={() => {
                            handleClickGameBoard(rowIndex, colIndex)
                            changeTurn()
                        }} >
                        {col}
                    </li>
                ))}
            </ul>
        ))}
    </div>
  )
}
