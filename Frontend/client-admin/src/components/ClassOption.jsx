import { Link } from 'react-router-dom';
import CharClass from './CharClass'
// import React, { useEffect } from 'react'
import { useContext,useEffect,useState } from 'react'
// import { SelectClassContext } from '../Context/context'

function ClassOption({ClassList,userState,createChar}) {
  const {userClass,setUserClass} = userState
  //helper state that will track the chosen playstyle 
  const [prevPlaystyle, setPrevPlaystyle] = useState(null);

  // Switch case the will add the stats of the selected playstyle
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
      setUserClass(() => ({
        ...userClass,
        ...getStatsForPlaystyle(userClass.playstyle),
      }));
      setPrevPlaystyle(userClass.playstyle);
    }
  }, [userClass.playstyle, prevPlaystyle, setUserClass]);


  return (
    <div className='classOptions'>
      {/* listing the api data here;limit 5 */}
        {ClassList.map((playStyle,i) => (
            <div key={i} >
                <CharClass playStyle={playStyle} setUserClass={setUserClass}/>
            </div>
        ))}
        {/* will display the playstyle you have chosen */}
        <div className='myClass'>{userClass.playstyle}</div>
        <div>
          <div>
            <div className='intructions'>Please Enter your <span className='highlight'>Name</span>, <span className='highlight'>picture</span>, and <span className='highlight'>Class</span>,then click enter to start</div>
          </div>
          {/* here the name for character is given */}
          <div className="name" >
            <input type="text"
              value={userClass.name}
              onChange={(e) =>
                setUserClass((prevClass) => ({
                  ...prevClass,
                  name: e.target.value,
              }))
            }/>
            {/* On submit the data from the userState will be sent to the backend and navigate to the game page  */}
            <button className="submit" onClick={createChar}>enter</button>
          </div>
        </div>
    </div>
  )
}

export default ClassOption
