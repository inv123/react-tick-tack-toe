import React from "react";
import "../src/style.css";
import { Player } from "./components/Player";
import { GameBoard } from "./components/GameBoard";
import { useState } from "react";
import { PLAYERS } from "./initials";
import { WINNING_COMBINATIONS, initialGameBoard } from "./initials";
import { Winner } from "./components/Winner";

export const App = () => {
  const [playerInfo, setPlayerInfo] = useState(PLAYERS);
  const [history, setHistory] = useState([]);
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  let winner;

  if(history.length == 9){
    winner = 'Draw'
  }

  const activePlayer = playerInfo.filter((x) => x.isActive == true)[0].name;
  const activePlayerSign = playerInfo.filter((x) => x.isActive == true)[0].sign;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      secondSquareSymbol === thirdSquareSymbol
    ) {
      winner = playerInfo.filter(x => x.sign == firstSquareSymbol)[0].name;
    }
  }

  

  function setNewPlayerName(sign, inputName) {
    const updatePlayer = [...playerInfo].map((player) => {
      if (player.sign == sign) {
        return { ...player, name: inputName };
      }
      return player;
    });
    setPlayerInfo(updatePlayer);
  }

  function handleChangeTurn() {
    const updatePlayer = [...playerInfo].map((player) => {
      const isActive = player.isActive;
      return { ...player, isActive: !isActive };
    });

    if (!winner) {
      setPlayerInfo(updatePlayer);
    }
  }

  function handleUpdateHistory(row, col) {
    const updatedHistory = [
      ...history,
      { player: activePlayer, sign: activePlayerSign, row, col },
    ];
    setHistory(updatedHistory);
  }

  function handleClickGameBoard(rowIndex, colIndex) {
    if (!winner) {
      handleChangeTurn();
    }
    setGameBoard((prevGameBoard) => {
      const upatedGameBoard = [...prevGameBoard].map((innerArray) => [
        ...innerArray,
      ]);
      if (upatedGameBoard[rowIndex][colIndex] == null) {
        upatedGameBoard[rowIndex][colIndex] = activePlayerSign;
        handleUpdateHistory(rowIndex, colIndex);
      }

      return upatedGameBoard;
    });
  }

  function handleResetGame(){
    setPlayerInfo(prevInfo => {
      const updatedPlayers = [...prevInfo].map(player => {
        if(player.sign == 'X'){
          return {...player, isActive: true}
        }else{
          return {...player, isActive: false}
        }
      })

      return updatedPlayers
    })

    
    setGameBoard(initialGameBoard)
    setHistory([])
  }

  return (
    <main>
      <div className="heading">
        <h1>Tick Tack Toe</h1>
      </div>

      <div className="gaming-field-container">
        <div className="gaming-field">
          {/* PLAYERS */}
          <div className="players">
            {playerInfo.map((player, index) => (
              <Player
                key={index}
                name={player.name}
                sign={player.sign}
                isActive={player.isActive}
                setNewPlayerName={setNewPlayerName}
              />
            ))}
          </div>

          {/* BOARD */}
          <GameBoard
            board={gameBoard}
            handleClickGameBoard={handleClickGameBoard}
          ></GameBoard>
        </div>
        <div className="chronology">
          <h4>Chronology</h4>
          <ul>
            {history.map((row, index) => (
              <li key={index}>
                {row.player} mark {row.sign} on row:{row.row} and col: {row.col}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {winner && (
       <Winner winner={winner} handleResetGame={handleResetGame}/>
      )}
    </main>
  );
};
