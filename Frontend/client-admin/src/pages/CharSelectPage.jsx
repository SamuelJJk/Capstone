import React from 'react'
import '../styles/CharSelect.css'
import ClassOption from '../components/ClassOption'
import CharPreview from '../components/CharPreview'

function CharSelectPage({ClassList,userState,createChar}) {
  return (
    <div className='charSelectPage'>
      <div className="firstContainer">
        {/* Passing prop of the data the will update user's char */}
        <CharPreview userState={userState}/>
        {/* passing prop of the API, user's char,and the func to send the data to backend */}
        <ClassOption ClassList={ClassList} userState={userState} createChar={createChar}/>
      </div>
    </div>
  )
}

export default CharSelectPage
