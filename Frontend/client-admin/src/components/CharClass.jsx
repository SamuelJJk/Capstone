import { useContext } from 'react'
import { SelectClassContext } from '../Context/context'

function CharClass({playStyle,setUserClass}) {
  const {selectedClass,setSelectedClass} = useContext(SelectClassContext)


  const checkClass = (event,val) =>{
    console.log(val,event)
    if (event.target.checked){
      setSelectedClass(val)
      setUserClass(prevState => ({
        ...prevState,
        playstyle: playStyle.name
      }));
    }
  }
  
  return (
    <div className='charClass'>
        <input type="checkbox" onChange={(event)=>checkClass(event,playStyle)}/>
        {playStyle.name}
    </div>
  )
}

export default CharClass
