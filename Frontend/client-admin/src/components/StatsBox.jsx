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
        <div className="name">{character.name}</div>
      </div>
    </div>
    )
    }else{
      return <div>Loading</div>
    }
  }
  return (
    initialLoad()
  )
}

export default StatsBox
