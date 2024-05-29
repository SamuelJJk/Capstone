import React,{useEffect, useState} from 'react'
import Screen from '../components/Screen'
import '../styles/Gamepage.css'
import StatsBox from '../components/StatsBox'
import axios from 'axios'


function GamePage() {
  const [myChar,setMyChar] = useState();
  const getMyChar =async()=>{
    const res = await axios.get(`/character`)
    const data = res.data
    if(data.length === 1){
      setMyChar(data[0])
    }else{
      setMyChar(data[data.length - 1])
    }
  }
  useEffect(() => {
    getMyChar();
  });
  return (
    <div className='gamepage'>
      <div className="statsContainer">
        <div className="playerStats">
          <StatsBox character={myChar}/>
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
