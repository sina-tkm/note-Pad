
import { useEffect, useReducer, useState } from 'react'
import StorageNotes from './storagenotes'
import CompNoteMaker from './compNoteMaker'
import EditorCompennet from './EditorCompennet'

function ShowClose(show,action){
switch(action.type){
    case "Close":
        return !show
    
    case "Change":
        return !show
    
    case "open":
        return !show
    
    default:
    return null
}
}

function HeaderComp(){
   
    const [noteStore,setNotestore] = useState(()=>JSON.parse(localStorage.getItem('ITEMSLIST'))||[])
    const [sortBy,setsortBy] =useState('completed')
    const [Edit,setEdit]=useState([])
    const [isShow,dispatch2] = useReducer(ShowClose,false)
    const [pull,setPull] = useState(false)
    
    console.log(noteStore)

    useEffect(()=>{
        const maketrue = ()=>{
            if(window.innerWidth >= 500){
            setPull(false)}
        }
       window.addEventListener('resize',maketrue)
        maketrue()

      
    },[])

        const handleClose = ()=>{
         setPull(true)    
          }     
        const handlePull = ()=>{
          setPull(false)
        }
      

   
    useEffect(()=> localStorage.setItem('ITEMSLIST',JSON.stringify(noteStore)),[noteStore])
   
    const handleIsClose = ()=>{ 
        dispatch2({type:"Close"})
    }
    const handleChange=()=>{
        dispatch2({type:"Change"})

    }
    const submitClose = ()=>{ 
    dispatch2({type:"open"})

    } 
    
    const handleEditNote = (newText)=>{

     const filtered = [...noteStore].filter(n=>n.id !== newText.id)
        setNotestore([...filtered,newText])
    
    }
  

    const handleNote = (newNote)=>{

      setNotestore(prev =>[...prev,newNote])

    }
 
 
    const handleDeleteNote = (e)=>{
  
    setNotestore(prevNote =>prevNote.filter(n =>n.id !== e))
    }

    const handleComplete = (e)=>{
        const newNote = Number(e.target.value)
        const nowComp = noteStore.map((note)=>
            note.id ===newNote ?{...note,completed:!note.completed } : note
            )
            setNotestore(nowComp)

    }  
    const handleEditWin = (CompNote)=>{
      setEdit([...CompNote])

    }

    return(
     <div className="container">
        <div className={ !pull    ? "closenav" : "displaynav"} id='close-nav' onClick={handleClose}></div>
        <StorageNotes
        pull={pull}
        handlePull={handlePull}
        noteStore={noteStore}
        sortBy = {sortBy}
        Edit = {Edit}
        handleDelete={handleDeleteNote} 
        onComplete={handleComplete}
        onAddEdit={handleEditWin}
        onchange={handleChange}
        />
        {Edit.map(note=>{
        return( 
        <EditorCompennet 
        isShow = {isShow} 
        key={note.id} 
        Notes={note} 
        submitClose={submitClose}
        onEditNote={handleEditNote}
        isClose={handleIsClose}
        />
      )
       
       })}
     
        <CompNoteMaker
        Edit={Edit}
        sortBy={sortBy}
        noteStore = {noteStore} 
        onAddNote = {handleNote}
        onSort= {e=>setsortBy(e.target.value)}
       
        
        />  
     </div>
    )
}
export default HeaderComp





