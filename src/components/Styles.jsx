
import { useState } from 'react'
import LeftComponent from './leftComponent'
import Rightcomponent from './Rightcomponent'
 



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
    let sortedNotos = noteStore;
    if(sortBy ==="earlist")
    sortedNotos = [...noteStore].sort(
    (a,b)=>new Date(a.createdAt) - new Date(b.createdAt))

    if(sortBy ==="latest")
    sortedNotos = [...noteStore].sort(
    (a,b)=>new Date(b.createdAt) - new Date(a.createdAt))

    if(sortBy ==="completed")
    sortedNotos = [...noteStore].sort(
    (a,b)=>Number(a.completed) - Number(b.completed))

    return(
     <div className="container">
        <LeftComponent 
        noteStore = {sortedNotos}
        handleDelete={handleDeleteNote} 
        onComplete={handleComplete}
        />
        <Rightcomponent 
        onAddNote = {handleNote}
        sortBy={sortBy}
        onSort= {e=>setsortBy(e.target.value)}
        noteStore = {noteStore} 
        />  
     </div>
    )
}
export default StyleNote





