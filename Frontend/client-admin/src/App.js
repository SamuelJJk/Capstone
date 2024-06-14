import { Route, Routes } from 'react-router-dom';
import './App.css';
import CharSelectPage from './pages/CharSelectPage'
import GamePage from './pages/GamePage'
import { useEffect, useState } from 'react';
import {SelectClassProvider} from './providers/Providers';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



function App() {
    const navigate = useNavigate();

    // my backend Data
    const [backendData,SetBackendData]= useState();
    
    const fetchBackendData = async()=>{
      const res = await fetch('/character')
      const data = await res.json();
      SetBackendData(data)
    }

    useEffect(()=>{
      fetchBackendData();
    },[])

  // Using a API to generate the playstyles which will be displayed in the CharSelectPage
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


  // State that hold the data of the char's class,stats,name
  const [userClass,setUserClass] = useState({
    name:'',
    playstyle:null,
    health:0,
    mana:0,
    strenght:0,
    intelligence:0,
    image:"",
  })

  // Sending the data from my userClass state to generate the char made and useNaigate to navigate to my game page
  const createChar =async()=>{
    const res = await axios.post("/character",userClass)
    console.log(res)
    navigate('/Game');
    
  }

  return (
    <div className="App">
      <SelectClassProvider>
        <Routes>
          <Route path='/'element={<CharSelectPage ClassList={AllCharClass} userState={{userClass,setUserClass}} createChar={createChar}/>}/>
          <Route path='/Game' element={<GamePage backendData={backendData} />}/>
        </Routes>
      </SelectClassProvider>
    </div>
  );
}

export default App;
