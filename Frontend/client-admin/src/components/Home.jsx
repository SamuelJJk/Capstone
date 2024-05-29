import React from 'react'

function Home({store}) {
  return (
    <div className='home'>
      <div className="btn" onClick={()=>{store()}}>Store</div>
      <div className="btn">Adventure</div>
    </div>
  )
}

export default Home
