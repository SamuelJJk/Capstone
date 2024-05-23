import { Route, Routes } from 'react-router-dom';
import './App.css';
import CharSelectPage from './pages/CharSelectPage'
import GamePage from './pages/GamePage'
import { useEffect, useState } from 'react';
import {SelectClassProvider} from './providers/Providers';



function App() {

  // Api for classes
  const [AllCharClass,setAllCharClass] =useState([]);
  const getClass =async()=>{
    try{
      const response = await fetch('https://api.open5e.com/v1/classes/?limit=5')
      const data = await response.json();
      setAllCharClass(data.results)
    } catch(e) {
      console.error(e)
    }
  }
  useEffect(()=>{
    getClass();
  },[])

  
  return (
    <div className="App">
      <SelectClassProvider>
        <Routes>
          <Route path='/'element={<CharSelectPage ClassList={AllCharClass}/>}/>
          <Route path='/Game' element={<GamePage/>}/>
        </Routes>
      </SelectClassProvider>
    </div>
  );
}

export default App;
