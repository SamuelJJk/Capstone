import React, { useEffect, useState } from 'react'
import Item from './Item'
import axios from 'axios';

function Store() {
  const [items,setItems] =useState();
  const [viewItem,setViewItem] = useState();
  const fetchItems =async()=>{
    const res = await axios.get('/item')
    setItems(res.data)
  }
  const initialLoad = () => {
    if (items) {
      return items.map((item) => (
        <Item key={item.id} item={item} />
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
