import CharClass from './CharClass'
// import React, { useEffect } from 'react'
import { useContext,useEffect,useState } from 'react'
// import { SelectClassContext } from '../Context/context'

function ClassOption({ClassList,userState}) {
  const {userClass,setUserClass} = userState
  const handleStats = () => {
    if (userClass.playstyle === 'Barbarian') {
      setUserClass((prevClass) => ({
        ...prevClass,
        health: 50,
        mana: 10,
        strength: 10,
        intelligence: 5,
      }));
    } else if (userClass.playstyle === 'Bard') {
      setUserClass((prevClass) => ({
        ...prevClass,
        health: 50,
        mana: 9,
        strength: 5,
        intelligence: 8,
      }));
    } else if (userClass.playstyle === 'Cleric') {
      setUserClass((prevClass) => ({
        ...prevClass,
        health: 70,
        mana: 10,
        strength: 2,
        intelligence: 8,
      }));
    } else if (userClass.playstyle === 'Druid') {
      setUserClass((prevClass) => ({
        ...prevClass,
        health: 30,
        mana: 40,
        strength: 6,
        intelligence: 6,
      }));
    } else if (userClass.playstyle === 'Fighter') {
      setUserClass((prevClass) => ({
        ...prevClass,
        health: 50,
        mana: 8,
        strength: 8,
        intelligence: 8,
      }));
    }
  };
  

  useEffect(()=>{
    handleStats()
  },[])
  return (
    <div className='classOptions'>
        {ClassList.map((playStyle,i) => (
            <div key={i} >
                <CharClass playStyle={playStyle} setUserClass={setUserClass}/>
            </div>
        ))}
        <div className='myClass'>{userClass.playstyle}</div>
        <div className="name">
          <input type="text"
            value={userClass.name}
            onChange={(e) =>
              setUserClass((prevClass) => ({
                ...prevClass,
                name: e.target.value,
            }))
          }/>
          <button className="submit">enter</button>
        </div>
    </div>
  )
}

export default ClassOption
