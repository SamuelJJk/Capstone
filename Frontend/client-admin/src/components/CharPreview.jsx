import React from 'react';
import '../styles/CharSelect.css'

function CharPreview({ userState }) {
  const { userClass } = userState;
  return (
    <div className='charPreview'>
      <div className="playerBox">
        <div className="playerName">{userClass.name}</div>
        <div className='statsContainer'>
          <div className="health">Health:{userClass.health}</div>
          <div>/</div>
          <div className="mana">Mana:{userClass.mana}</div>
          <div>/</div>
          <div className="strength">Str:{userClass.strength}</div>
          <div>/</div>
          <div className="intelligence">Int:{userClass.intelligence}</div>
        </div>
      </div>
      <div className="imagesList">
        <div className='charIcons'><img src="/female2.png" alt="" /></div>
        <div className='charIcons'><img src="/female1.jpg" alt="" /></div>
        <div className='charIcons'><img src="/female3.png" alt="" /></div>
        <div className='charIcons'><img src="/male1.png" alt="" /></div>
        <div className='charIcons'><img src="/male2.png" alt="" /></div>
        <div className='charIcons'><img src="/male3.png" alt="" /></div>
        <div className='charIcons'><img src="/female4.png" alt="" /></div>
        <div className='charIcons'><img src="/female5.png" alt="" /></div>
        <div className='charIcons'><img src="/male4.png" alt="" /></div>
        <div className='charIcons'><img src="/female6.png" alt="" /></div>
      </div>
    </div>
  );
}

export default CharPreview;