import React from 'react'
import CharClass from './CharClass'
import { useContext } from 'react'
import { SelectClassContext } from '../Context/context'

function ClassOption({ClassList}) {
const {selectClass,setSelectedClass} = useContext(SelectClassContext)
  return (
    <div className='classOptions'>
        {ClassList.map((charClass,i) => (
            <div className='classform'>
                <input type="checkbox"/>
                <CharClass key={i} charClass={charClass}/>
            </div>
        ))}
    </div>
  )
}

export default ClassOption
