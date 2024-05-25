import React from 'react'
import Screen from '../components/Screen'
import '../styles/Gamepage.css'
import StatsBox from '../components/StatsBox'


function GamePage({backendData}) {
  return (
    <div className='gamepage'>
      <div className="statsContainer">
        <div className="playerStats">
          <StatsBox backendData={backendData}/>
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
