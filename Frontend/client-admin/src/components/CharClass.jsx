import React from 'react'
import { useContext } from 'react'
import { SelectClassContext } from '../Context/context'

function CharClass({charClass}) {
  const {selectClass,setSelectedClass} = useContext(SelectClassContext)
  const checkClass = (event,val) =>{
    if (event.target.checked){
      setSelectedClass(val)
      console.log(val)
    }
  }
  return (
    <div className='charClass'>
        <input type="checkbox" onChange={(event)=>checkClass(event,charClass.name)}/>
        {charClass.name}
    </div>
  )
}

export default CharClass
