import React, { useState } from 'react'

function Item({item}) {
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
      <div className="itemName">{item.name}</div>
      <div className="amount">
        <button onClick={()=>{count("-")}}>-</button>
        <div className="quantity">{quantity}</div>
        <button onClick={()=>{count("+")}}>+</button>
      </div>

    </div>
  )
}

export default Item
