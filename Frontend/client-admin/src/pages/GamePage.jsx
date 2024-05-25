import React from 'react'
import Screen from '../components/Screen'
import '../styles/Gamepage.css'
import StatsBox from '../components/StatsBox'


function GamePage() {
  return (
    <div className='gamepage'>
      <div className="firstContainer">
        <div className="playerStats">
          <StatsBox />
        </div>
        <div className="enemiesStats">
          <StatsBox />
        </div>
      </div>
      <div className="secondContainer">
        <Screen/>
      </div>
    </div>
  )
}

export default GamePage
