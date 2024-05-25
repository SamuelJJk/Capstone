import { Route, Routes } from 'react-router-dom';
import './App.css';
import CharSelectPage from './pages/CharSelectPage'
import GamePage from './pages/GamePage'
import { useEffect, useState } from 'react';
import {SelectClassProvider} from './providers/Providers';



function App() {
  const [backendData,SetBackendData]= useState();

  useEffect(()=>{
    fetch("/character",).then(
      response => response.json()
    ).then(
      data =>{
        SetBackendData(data)
      }
    )
  },[])

  
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

  const [userClass,setUserClass] = useState({
    name:'',
    playstyle:null,
    health:0,
    mana:0,
    strenght:0,
    intelligence:0,
  })

  
  return (
    <div className="App">
      <SelectClassProvider>
        <Routes>
          <Route path='/'element={<CharSelectPage ClassList={AllCharClass} userState={{userClass,setUserClass}} />}/>
          <Route path='/Game' element={<GamePage/>}/>
        </Routes>
      </SelectClassProvider>
    </div>
  );
}

export default App;
