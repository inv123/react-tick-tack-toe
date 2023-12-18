import React from "react";
import "../src/style.css";
import { Player } from "./components/Player";
import { GameBoard } from "./components/GameBoard";
import { useState } from "react";
import { PLAYERS } from "./initials";

export const App = () => {
  const [playerInfo, setPlayerInfo] = useState(PLAYERS);
  const [history, setHistory] = useState([]);
  const [winner, setWinner] = useState();

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

    setPlayerInfo(updatePlayer);
  }

  function handleUpdateHistory(player, sign, row, col) {
    const updatedHistory = [...history, { player, sign, row, col }];
    setHistory(updatedHistory);
  }

  function handleWinner(player){
     setWinner(player);
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
            players={playerInfo}
            changeTurn={handleChangeTurn}
            updateHistory={handleUpdateHistory}
            handleWinner={handleWinner}
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
        <div className="winner">
          <div className="overlay"></div>
          <div className="winner-block">
            <h2>Game over!</h2>
            <p>{winner} won!</p>
            <button className="rematch-btn">Rematch!</button>
          </div>
        </div>
      )}
    </main>
  );
};
