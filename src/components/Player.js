import React from "react";
import { useState } from "react";

export const Player = ({name, sign, turn}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName,setPlayerName] = useState(name);
    const setPlayerTurnClass = turn === sign ? ' active' : null;
    const editActionBtnClass = isEditing ? ' active' : null;

    function handleClick(){
        setIsEditing(() => !isEditing);
    }

  return (
    <div className={'player ' + setPlayerTurnClass}>
      {!isEditing ? 
        <span className="name">{playerName}</span> 
        : 
        <input 
            className="name-input" 
            type="text" 
            value={playerName} 
            onChange={(e) => setPlayerName(e.target.value)}></input>}
      
      <span className="sign">{sign}</span>
      <button 
        className={'action-btn ' + editActionBtnClass}
        onClick={handleClick}>
        {isEditing ? 'Save' : 'Edit'}
        </button>
    </div>
  );
};
