import React from 'react'
import CharClass from './CharClass'
import { useContext } from 'react'
import { SelectClassContext } from '../Context/context'

function ClassOption({ClassList}) {
const {selectClass,setSelectedClass} = useContext(SelectClassContext)
// const checkClass = (event,val) =>{
//   if (event.target.checked){
//     setSelectedClass(val)
//     console.log(val)
//   }
// }
  return (
    <div className='classOptions'>
        {ClassList.map((charClass,i) => (
            <div className='classform'>
                {/* <input type="checkbox" onChange={(event)=>{checkClass(event,charClass)}}/> */}
                <CharClass key={i} charClass={charClass} />
            </div>
        ))}
    </div>
  )
}

export default ClassOption
