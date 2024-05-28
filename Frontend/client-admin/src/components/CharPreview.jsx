import React from 'react';
import '../styles/CharSelect.css'

function CharPreview({ userState }) {
  const { userClass,setUserClass } = userState;
  const pickProfle =(src)=>{
    setUserClass((prevClass) => ({
      ...prevClass,
      image: src,
    }));
  }
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
        <div className='charIcons'onClick={()=>{pickProfle("/female2.png")}}><img src="/female2.png" alt="" /></div>
        <div className='charIcons' onClick={()=>{pickProfle("/female1.jpg")}}><img src="/female1.jpg" alt="" /></div>
        <div className='charIcons' onClick={()=>{pickProfle("/female3.png")}}><img src="/female3.png" alt="" /></div>
        <div className='charIcons' onClick={()=>{pickProfle("/male1.png")}}><img src="/male1.png" alt="" /></div>
        <div className='charIcons' onClick={()=>{pickProfle("/male2.png")}}><img src="/male2.png" alt="" /></div>
        <div className='charIcons' onClick={()=>{pickProfle("/male3.png")}}><img src="/male3.png" alt="" /></div>
        <div className='charIcons' onClick={()=>{pickProfle("/female4.png")}}><img src="/female4.png" alt="" /></div>
        <div className='charIcons' onClick={()=>{pickProfle("/female5.png")}}><img src="/female5.png" alt="" /></div>
        <div className='charIcons' onClick={()=>{pickProfle("/male4.png")}}><img src="/male4.png" alt="" /></div>
        <div className='charIcons' onClick={()=>{pickProfle("/female6.png")}}><img src="/female6.png" alt="" /></div>
      </div>
    </div>
  );
}

export default CharPreview;