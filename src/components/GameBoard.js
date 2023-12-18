import React from 'react';
import { useState } from 'react';


const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export const GameBoard = ({turn, setPlayerMove, updateChronology}) => {
    

    

  return (
    <div className='game-board' >
        {/* {gameBoard.map((row, rowIndex) => (
            <ul key={rowIndex}>
                {row.map((col, colIndex) => (
                    <li key={colIndex} onClick={() => handleClickBoard(rowIndex, colIndex)}>{col}</li>
                ))}
            </ul>
        ))} */}
    </div>
  )
}
