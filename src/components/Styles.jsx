
import { useState } from 'react'
import LeftComponent from './leftComponent'
import Rightcomponent from './Rightcomponent'
 



function StyleNote(){
    const [noteStore,setnotestore] =useState([])
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
    return(
     <div className="container">
        <LeftComponent 
        noteStore = {noteStore}
        handleDelete={handleDeleteNote} 
        onComplete={handleComplete}
        />
        <Rightcomponent 
        onAddNote = {handleNote}
        noteStore = {noteStore} 
        />  
     </div>
    )
}
export default StyleNote





