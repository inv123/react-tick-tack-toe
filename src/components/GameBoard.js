import React from 'react';



export const GameBoard = ({board, handleClickGameBoard}) => {


  return (
    <div className='game-board' >
        {board.map((row, rowIndex) => (
            <ul key={rowIndex}>
                {row.map((col, colIndex) => (
                    <li key={colIndex}
                        onClick={() => {
                            handleClickGameBoard(rowIndex, colIndex);
                        }} >
                        {col}
                    </li>
                ))}
            </ul>
        ))}
    </div>
  )
}
