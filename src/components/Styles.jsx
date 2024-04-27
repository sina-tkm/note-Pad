
import { useState } from 'react'
import StorageNotes from './storagenotes'
import CompNoteMaker from './compNoteMaker'
 



function StyleNote(){
    const [noteStore,setnotestore] =useState([])
    const [sortBy,setsortBy] =useState('completed')


    
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
        <StorageNotes
        noteStore = {noteStore}
        sortBy = {sortBy}
        handleDelete={handleDeleteNote} 
        onComplete={handleComplete}
        />
        <CompNoteMaker
        onAddNote = {handleNote}
        sortBy={sortBy}
        onSort= {e=>setsortBy(e.target.value)}
        noteStore = {noteStore} 
        />  
     </div>
    )
}
export default StyleNote





