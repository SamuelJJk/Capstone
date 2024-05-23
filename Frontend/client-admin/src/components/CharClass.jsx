import React from 'react'

function CharClass({charClass}) {
    console.log(charClass)
  return (
    <div className='charClass'>
        {charClass.name}
    </div>
  )
}

export default CharClass
