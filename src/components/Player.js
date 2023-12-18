import React from "react";
import { useState } from "react";

export const Player = ({name, sign, isActive, setNewPlayerName}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [inputName, setInputName] = useState(name)
    const setPlayerTurnClass = isActive ? ' active' : null;
    const editActionBtnClass = isEditing ? ' active' : null;

    function handleClick(){
        setIsEditing(() => !isEditing);
    }

  return (
    <div className={'player ' + setPlayerTurnClass}>
      {!isEditing 
        ? <span className="name">{name}</span> 
        : <input 
            className="name-input" 
            type="text" 
            value={inputName} 
            onChange={(e) => setInputName(e.target.value)}></input>
      }
      <span className="sign">{sign}</span>
      <button 
        className={'action-btn ' + editActionBtnClass}
        onClick={() => {
          handleClick();
          isEditing && setNewPlayerName(sign, inputName)
        }}>
        {isEditing ? 'Save' : 'Edit'}
        </button>
    </div>
  );
};
