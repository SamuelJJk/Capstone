import React from 'react'

function StatsBox({character}) {
  const initialLoad =()=>{
    if(character){
     return( 
     <div className='statsBox'>
      <div className="stats">
        <div className="health">Hp:{character.health} </div>
        <div>/</div>
        <div className="mana">Mp:{character.mana}</div>
        <div>/</div>
        <div className="strength">Str:{character.strength}</div>
        <div>/</div>
        <div className="intel">Int: {character.intelligence}</div>
      </div>
      <div className="info">
        <img src={character.image} alt="" className="icon" />
        <div className="Name-and-coin">
          <div className="name">{character.name}</div>
          <div className='money'><img className='coin' src="https://i.pinimg.com/originals/f9/da/09/f9da09a345b352d9f6cd4e59f66197c4.png" alt="" />{character.money}</div>
        </div>
      </div>
      
    </div>
    )
    }else{
      return <div></div>
    }
  }
  return (
    initialLoad()
  )
}

export default StatsBox
