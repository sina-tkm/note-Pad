
import { useState } from 'react'
import NotePad from '../component-icon/note-icon.svg'
import StatusBar from './StatusBar';
import SortHeader from './sortHeader';


function CompNoteMaker({onAddNote,noteStore,sortBy,onSort,isChecked}) {
    const [title,setTitle] = useState("");
    const [description,setDescription]=useState("")
    
    

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
    onAddNote(newNote)
    setTitle('')
    setDescription('')
   
   }
  
  return (
    <div className="right--container" >
        
    <div className="header right--header" >
        <img src={NotePad}  alt="NotePad" className="note__pad--icon" onClick={handleClick}/>
      <SortHeader  sortBy={sortBy} onSort={onSort}/>
      <StatusBar noteStore= {noteStore}/>
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