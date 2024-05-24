import React from 'react'
import '../styles/CharSelect.css'
import ClassOption from '../components/ClassOption'
import Textbox from '../components/Textbox'
import CharPreview from '../components/CharPreview'

function CharSelectPage({ClassList}) {
  return (
    <div className='charSelectPage'>
      <div className="firstContainer">
        <CharPreview />
        <ClassOption ClassList={ClassList}/>
      </div>
      <div className="secondContainer">
        <Textbox />
      </div>
    </div>
  )
}

export default CharSelectPage
