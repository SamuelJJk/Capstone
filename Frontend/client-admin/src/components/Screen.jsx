import React, { useState } from 'react'
import '../styles/screen.css'
import Store from './Store'
import Home from './Home'
import { Link } from 'react-router-dom'

function Screen() {
  const goToHome=()=>{
    setDisplay(<Home store={goToStore}/>)
  }
  const goToStore =()=>{
    setDisplay(<Store home={goToHome}/>)
  }
  const [display,setDisplay]=useState(<Home store={goToStore}/>)
  return (
    <div className='screen'>
      <div className="actions">
        <Link to={'/'}>
          <button className='startOver'>Start Over</button>
        </Link>
        <button  className='goBack' onClick={()=>{goToHome()}}>Back</button>
      </div>
      <div className='screenDisplay'>
        {display}
      </div>
    </div>
  )
}

export default Screen
