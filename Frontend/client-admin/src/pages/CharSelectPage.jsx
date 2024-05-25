import React from 'react'
import '../styles/CharSelect.css'
import ClassOption from '../components/ClassOption'
import Textbox from '../components/Textbox'
import CharPreview from '../components/CharPreview'

function CharSelectPage({ClassList,userState,createChar}) {
  return (
    <div className='charSelectPage'>
      <div className="firstContainer">
        <CharPreview userState={userState}/>
        <ClassOption ClassList={ClassList} userState={userState} createChar={createChar}/>
      </div>
      <div className="secondContainer">
        <Textbox />
      </div>
    </div>
  )
}

export default CharSelectPage
