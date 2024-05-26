
import { useEffect, useReducer, useState ,createContext} from 'react'
import StorageNotes from './storagenotes'
import CompNoteMaker from './compNoteMaker'
import EditorCompennet from './EditorCompennet'
import { NotesProvider } from './contexts/notelist'



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
export const NoteContext = createContext()

function HeaderComp(){
   
  
    const [sortBy,setsortBy] =useState('completed')
    const [Edit,setEdit]=useState([])
    const [isShow,dispatch] = useReducer(ShowClose,false)
    const [pull,setPull] = useState(false)
    
  
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
      
    const handleIsClose = ()=>{ 
        dispatch({type:"Close"})
    }
    const handleChange=()=>{
        dispatch({type:"Change"})

    }
    const submitClose = ()=>{ 
        dispatch({type:"open"})

    } 
    
  
    const handleEditWin = (CompNote)=>{
      setEdit([...CompNote])

    }

    return(
    <NoteContext.Provider value={{sortBy}}>

    <NotesProvider>
    <div className="container">
        <div className={ !pull    ? "closenav" : "displaynav"} id='close-nav' onClick={handleClose}></div>
        <StorageNotes
        pull={pull}
        handlePull={handlePull}
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
        isClose={handleIsClose}
        />
      )})}
        <CompNoteMaker
        onSort= {e=>setsortBy(e.target.value)}/>  
     </div>
    </NotesProvider>
    </NoteContext.Provider>
    )
}
export default HeaderComp









 