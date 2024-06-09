function ItemPreview({item}) {
    const initialLoad =()=>{
        if(item){
            return (
                <>
                    <div>{item.name}</div>    
                    <div>{item.effect}</div>    
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
