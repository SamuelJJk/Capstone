// import React, { useEffect } from 'react'
import { useContext, useEffect } from 'react'
import { SelectClassContext } from '../Context/context'

function CharClass({playStyle}) {
  const {selectClass,setSelectedClass} = useContext(SelectClassContext)
  console.log(`selectClass:${selectClass}`)


  const checkClass = (event,val) =>{
    console.log(val)
    if (event.target.checked){
      setSelectedClass(val)
      console.log(typeof(selectClass))
    }
  }
  // useEffect(()=>{
  //   console.log(selectClass)
  // },[selectClass])

  return (
    <div className='charClass'>
        <input type="checkbox" onChange={(event)=>checkClass(event,playStyle)}/>
        {playStyle.name}
    </div>
  )
}

export default CharClass
