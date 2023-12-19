import React from "react";

export const Winner = ({winner, handleResetGame}) => {
  return (
    <div className="winner">
      <div className="overlay"></div>
      <div className="winner-block">
        <h2>Game over!</h2>
        <p>{winner} won!</p>
        <button className="rematch-btn" onClick={handleResetGame}>Rematch!</button>
      </div>
    </div>
  );
};
