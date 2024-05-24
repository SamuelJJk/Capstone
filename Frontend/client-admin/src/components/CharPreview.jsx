import React from 'react';

function CharPreview({ userState }) {
  const { userClass } = userState;
  return (
    <div className='charPreview'>
      <div className="StatsContainer">
        <div className="health">Health: {userClass.health}</div>
        <div>/</div>
        <div className="mana">Mana: {userClass.mana}</div>
        <div>/</div>
        <div className="strength">Str: {userClass.strength}</div>
        <div>/</div>
        <div className="intelligence">Int: {userClass.intelligence}</div>
      </div>
    </div>
  );
}

export default CharPreview;