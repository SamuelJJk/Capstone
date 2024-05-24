import CharClass from './CharClass'
// import React, { useEffect } from 'react'
// import { useContext,useState } from 'react'
// import { SelectClassContext } from '../Context/context'

function ClassOption({ClassList}) {
// const {selectClass,setSelectedClass} = useContext(SelectClassContext)

  return (
    <div className='classOptions'>
        {ClassList.map((playStyle,i) => (
            <div key={i} className='classform'>
                <CharClass playStyle={playStyle} />
            </div>
        ))}
        <div className="name">
          <input type="text" />
          <button className="submit">enter</button>
        </div>
    </div>
  )
}

export default ClassOption
