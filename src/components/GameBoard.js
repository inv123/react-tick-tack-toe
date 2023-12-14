import React from 'react'

export const GameBoard = () => {
    const initialGameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]

  return (
    <div className='game-board'>
    
        {initialGameBoard.map((row, rowIndex) => <ul key={rowIndex}>
            <>
                {row.map((col, colIndex) => <li key={colIndex}></li>)}
            </>
        </ul>)}
    </div>
  )
}
