
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
function noteStorage(state,{type,payload}){
    switch(type){
        case "add":
            return [...state,payload]
        case "delete":
            return  state.filter(n=>n.id !== payload)
        case "complete":
            return  state.map((note)=> note.id ===payload ?{...note,completed:!note.completed } : note)
        case "edit":
            return [ ...state.filter(n=>n.id !== payload.id),payload]           

}
}

function HeaderComp(){
    const [noteStore,dispatch1] = useReducer(noteStorage,[],()=>JSON.parse(localStorage.getItem('ITEMSLIST')))
    const [sortBy,setsortBy] =useState('completed')
    const [Edit,setEdit]=useState([])
    const [isShow,dispatch2] = useReducer(ShowClose,false)
    const [pull,setPull] = useState(false)
    

    useEffect(()=>{
        const maketrue = ()=>{
            if(window.innerWidth >= 500){
            setPull(false)}
        }
       
        maketrue()

      
    },[pull])

    


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
    dispatch1({type:"edit",payload:newText})
    }
  

    const handleNote = (newNote)=>{
    dispatch1({type:"add",payload:newNote})
    }
 
 
    const handleDeleteNote = (id)=>{
    dispatch1({type:"delete",payload:id})
    }

    const handleComplete = (e)=>{
        const newNote = Number(e.target.value)
        dispatch1({type:"complete",payload : newNote})

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





