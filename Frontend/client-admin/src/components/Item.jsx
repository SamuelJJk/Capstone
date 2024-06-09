import React, { useState } from 'react'

function Item({item,setViewItem}) {
  //func to update state on which item is being clicked
  const clickedItem = ()=>{
    setViewItem(item);
  }
  //State that track the amount the user whats of an item 
  const [quantity,setQuantity] = useState(0)
  const count =(operation)=>{
    if(operation === "+"){
      setQuantity(prevCount => prevCount +=1)
    }else {
      if(quantity > 0){
        setQuantity(prevCount => prevCount -=1)
      }else{
        console.log("can't go any lower")
      }
    }
  }
  return (
    <div className='item'>
      <div className="itemName" onClick={()=>{clickedItem()}}>{item.name}</div>
      <div className="amount">
        <button className='btn4Quantity' onClick={()=>{count("-")}}>-</button>
        <div className="quantity">{quantity}</div>
        <button className='btn4Quantity' onClick={()=>{count("+")}}>+</button>
      </div>

    </div>
  )
}

export default Item
