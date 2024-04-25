
import { useState } from 'react'
import NotePad from '../component-icon/note-icon.svg'
import StatusBar from './StatusBar';


function Rightcomponent({onAddNote,noteStore}) {
    const [title,setTitle] = useState("");
    const [description,setDescription]=useState("")
    

   const handleClick=(e)=>{
    e.preventDefault()
    if(!title ||!description) return null;
    const newNote = {
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
    <div className="right--container">
    <div className="header right--header">
        <img src={NotePad}  alt="NotePad" className="note__pad--icon" onClick={handleClick}/>
        <div className="sort sort--input">
         <select name="" id="" className="select--input">
            <option value="">sort base on latest</option>
            <option value="">sort base on earliest</option>
            <option value="">sort base on completed</option>
         </select>
        </div>
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
export default Rightcomponent