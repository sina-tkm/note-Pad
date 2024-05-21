
import {   useEffect, useState } from 'react'
import StorageNotes from './storagenotes'
import CompNoteMaker from './compNoteMaker'
import EditorCompennet from './EditorCompennet'



function HeaderComp(){
    const [noteStore,setnotestore] = useState(()=>JSON.parse(localStorage.getItem('ITEMSLIST'))||[])
    const [sortBy,setsortBy] =useState('completed')
    const [Edit,setEdit]=useState([])
    const [isShow,setisShow] =useState(false)
  
     
      


    
  

    useEffect(()=> localStorage.setItem('ITEMSLIST',JSON.stringify(noteStore)),[noteStore])
   
  
    
    const handleIsClose = ()=>{
        setisShow(!isShow)
    }
    const handleChange=()=>{
        setisShow(!isShow)
    }
    const submitClose = ()=>{
        setisShow(!isShow)
    } 
    
    const handleEditNote = (newText)=>{
        const privious = noteStore
       const filtered =  privious.filter(n=>n.id !== newText.id)
        setnotestore([...filtered,newText])  
    }
  

    const handleNote = (newNote)=>{
        setnotestore((prevNote)=>[...prevNote,newNote]) 
   
    }
 
 
    const handleDeleteNote = (id)=>{
        setnotestore(prevNote =>prevNote.filter(n =>n.id !== id))
    }

    const handleComplete = (e)=>{
        const newNote = Number(e.target.value)
        const nowComp = noteStore.map((note)=>
        note.id ===newNote ?{...note,completed:!note.completed } : note
        )
        setnotestore(nowComp)

    }  
    const handleEditWin = (CompNote)=>{
      setEdit([...CompNote])

    }

    return(
     <div className="container">
        <StorageNotes
      
        noteStore={noteStore}
        sortBy = {sortBy}
        handleDelete={handleDeleteNote} 
        onComplete={handleComplete}
        onAddEdit={handleEditWin}
        Edit = {Edit}
        onchange={handleChange}
        />
        {Edit.map(note=>{
        return( 
        <EditorCompennet 
        submitClose={submitClose}
        isShow = {isShow}
        key={note.id} 
        Notes={note} 
        onEditNote={handleEditNote}
        isClose={handleIsClose}
        />
      )
       
       })}
     
        <CompNoteMaker
        Edit={Edit}
        onAddNote = {handleNote}
        sortBy={sortBy}
        onSort= {e=>setsortBy(e.target.value)}
        noteStore = {noteStore} 
        
        />  
     </div>
    )
}
export default HeaderComp





