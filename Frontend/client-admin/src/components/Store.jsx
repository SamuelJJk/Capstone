import React, { useEffect, useState } from 'react'
import Item from './Item'
import axios from 'axios';

function Store() {
  //This is the state that store my items from my database
  const [items,setItems] =useState();
  //This state will track what item is being clicked
  const [viewItem,setViewItem] = useState();

  //fetching from data base
  const fetchItems =async()=>{
    const res = await axios.get('/item')
    setItems(res.data)
  }
  //This function is for when the page is waiting for data 
  const initialLoad = () => {
    if (items) {
      return items.map((item) => (
        <Item key={item.id} item={item} setViewItem={setViewItem}/>
      ));
    } else {
      return <div>Waiting for items to load</div>;
    }
  };

  useEffect(()=>{
    fetchItems();
  },[])

  return (
    <div className='store'>
      <div className='window'>
        {initialLoad()}
      </div>
      <div className='window'>
        preview
      </div>
    </div>
  )
}

export default Store
