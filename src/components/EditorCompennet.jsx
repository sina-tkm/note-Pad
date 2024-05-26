import { useState } from "react"
import { useDispatch } from "./contexts/notelist"


function EditorCompennet({Notes,isClose,isShow,submitClose}) {
  const [title,setnewTitle] = useState("")
  const [description,setnewdesc] = useState("")
  const dispatch = useDispatch()
  const handleSubmit = ()=>{
    const newText = {
      title,
      description,
      id:Notes.id,
      completed:false,
      createdAt:new Date().toISOString()
    }
    dispatch({type:"edit",payload:newText})
    setnewTitle('')
    setnewdesc('')
    
  }
  const option = {
    year:"numeric",
    month:"short",
    day:"numeric"
  }

  return (
    <div className={isShow?"edit--window":"not--window"}>
    <div className="ineditor--window">
    <div className="title--window">
      <h4 className="detail--window">Title:  {Notes.title}</h4>
      <h5 className="detail--window">Description:  {Notes.description}</h5>
      <div className="date--time">{new Date(Notes.date).toLocaleDateString("en"-"US",option)}</div>
    </div>
   
      <div className="input--window">
        <div className="input--form">
          <input type="text" className="title--edit-inut" placeholder="Edit title..." value={title} onChange={(e)=>setnewTitle(e.target.value)} />
          <input type="text" className="title--edit-inut"placeholder="Edit desc..." value={description} onChange={(e)=>setnewdesc(e.target.value)}/>
        <div className="submit--button">
        <button className="submit" onClick={()=>{handleSubmit(),submitClose()}}>Submit</button>
        <button className="cancel" onClick={()=>isClose()}>Cancel</button>
        </div>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default EditorCompennet