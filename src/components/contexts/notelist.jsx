
import { createContext,useContext,useEffect,useReducer} from "react";


 const NoteList = createContext(null)
 const DispatchNotes = createContext(null)

 
 function reducerNote(notestore,action){
    switch(action.type){ 
         case "add":{
            return [...notestore,action.payload]
        }
        case "delete":{
            return notestore.filter((item)=> !item.completed)
        }
      
        case "edit":{
            
            const filtered = notestore.filter(n=>n.id !== action.payload.id)
        
        return  [...filtered,...action.payload]
            
        }
        case "completed" :{
                return notestore.map((notes)=>
                notes.id === action.payload
                ? {...notes,completed : !notes.completed}
                : notes
           
        )
    }
 
    default:
         throw new Error("unknown action" + action.type)
    }
 }
 const initialNotes = JSON.parse(localStorage.getItem('notestore')) || [];

  export function NotesProvider({children}){
     const [notestore,dispatch] = useReducer(reducerNote,initialNotes)
    
     useEffect(() => {
      localStorage.setItem('notestore', JSON.stringify(notestore));
    }, [notestore]);
    return (
    <NoteList.Provider value ={notestore}>
    <DispatchNotes.Provider value={dispatch}>
         {children}
    </DispatchNotes.Provider>
    </NoteList.Provider>)
  }

  export function useNotes(){
    return useContext(NoteList)
  }
  export function useDispatch(){
  return  useContext(DispatchNotes)
  }
   
  

