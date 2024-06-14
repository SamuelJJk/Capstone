function ItemPreview({item}) {
    // func for when item state is empty 
    const initialLoad =()=>{
        if(item){
            return (
                <>
                    <div className="selectedItemImage"><img src="" alt="" /></div>
                    <div className="selectedItemName">{item.name}</div>    
                    <div className="selectedItemEffect">{item.effect}</div>    
                </>
            )
        }
    }
  return (
    <div className='itemPreview'>
        {initialLoad()}
    </div>
  )
}

export default ItemPreview
