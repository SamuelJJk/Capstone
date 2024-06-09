import React from 'react'

function ItemPreview({item}) {
  return (
    <div className='itemPreview'>
        <div>{item.name}</div>
    </div>
  )
}

export default ItemPreview
