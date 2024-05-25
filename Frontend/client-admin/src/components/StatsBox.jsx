import React from 'react'

function StatsBox({props}) {
  return (
    <div className='statsBox'>
      <div className="stats">
        <div className="health">Hp: /</div>
        <div className="mana">Mp: /</div>
        <div className="strength">Str: /</div>
        <div className="intel">Int: </div>
      </div>
      <div className="info">
        <img src="https://media.pocketgamer.com/artwork/na-wrds/mario-2.png" alt="" className="icon" />
        <div className="name">juice wrld</div>
      </div>
    </div>
  )
}

export default StatsBox
