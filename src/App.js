import React from 'react';
import '../src/style.css';

export const App = () => {
  return (
   <main>
        <div className='heading'>
            <h1>Tick Tack Toe</h1>
        </div>

        <div className='gaming-field-container'>
            <div className='gaming-field'>
                PLAYERS

                BOARD
            </div>
        </div>
   </main>
  )
}
