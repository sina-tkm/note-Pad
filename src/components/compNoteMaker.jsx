
import { useContext, useState } from 'react'
import NotePad from '../component-icon/note-icon.svg'
import StatusBar from './StatusBar';
import SortHeader from './sortHeader';
import { NoteContext} from './HeaderComp';
import { useDispatch } from './contexts/notelist';


function CompNoteMaker({onSort,isChecked}) {
  const dispatch = useDispatch()
    const [title,setTitle] = useState("");
    const [description,setDescription]=useState("")
    const {sortBy} = useContext(NoteContext)
    

   const handleClick=(e)=>{
    e.preventDefault()
    if(!title ||!description) return null;
    const newNote = {
        isChecked,
        title,
        description,
        id:Date.now(),
        completed:false,
        createdAt:new Date().toISOString()
    }
    dispatch({type:"add",payload:newNote})
    setTitle('')
    setDescription('')
   
   }
  
  return (
    <div className="right--container" >    
    <div className="header right--header" >
        <img src={NotePad}  alt="NotePad" className="note__pad--icon" onClick={handleClick}/>
      <SortHeader  sortBy={sortBy} onSort={onSort}/>
      <StatusBar/>
    </div>
       <form> 
         <input
          value={title}
          onChange={(e)=>{setTitle(e.target.value)}}
          type="text" 
          className='title--input' 
          placeholder='title...' />
          <input 
          value={description}
          onChange={(e)=>{setDescription(e.target.value)}}
          type="text" 
          className="text--input"  
          placeholder='description...' />
       </form> 
</div>
    
  )
}
export default CompNoteMaker