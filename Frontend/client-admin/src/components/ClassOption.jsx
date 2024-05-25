import CharClass from './CharClass'
// import React, { useEffect } from 'react'
import { useContext,useEffect,useState } from 'react'
// import { SelectClassContext } from '../Context/context'

function ClassOption({ClassList,userState,createChar}) {
  const {userClass,setUserClass} = userState
  const [prevPlaystyle, setPrevPlaystyle] = useState(null);

  const getStatsForPlaystyle = (playstyle) => {
    switch (playstyle) {
      case 'Barbarian':
        return { health: 50, mana: 10, strength: 10, intelligence: 5 };
      case 'Bard':
        return { health: 50, mana: 9, strength: 5, intelligence: 8 };
      case 'Cleric':
        return { health: 70, mana: 10, strength: 2, intelligence: 8 };
      case 'Druid':
        return { health: 30, mana: 40, strength: 6, intelligence: 6 };
      case 'Fighter':
        return { health: 50, mana: 8, strength: 8, intelligence: 8 };
      default:
        return {};
    }
  };

  useEffect(() => {
    if (userClass.playstyle !== prevPlaystyle) {
      setUserClass((prevClass) => ({
        ...prevClass,
        ...getStatsForPlaystyle(userClass.playstyle),
      }));
      setPrevPlaystyle(userClass.playstyle);
    }
  }, [userClass.playstyle, prevPlaystyle, setUserClass]);
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
          <button className="submit" onClick={createChar}>enter</button>
        </div>
    </div>
  )
}

export default ClassOption
