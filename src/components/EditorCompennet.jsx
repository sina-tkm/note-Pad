import { useState } from "react"


function EditorCompennet({Notes,onEditNote,isClose,isShow,submitClose}) {
  const [title,setnewTitle] = useState("")
  const [description,setnewdesc] = useState("")
  const handleSubmit = ()=>{
    const newText = {
      title,
      description,
      id:Notes.id,
      completed:false,
      createdAt:new Date().toISOString()
    }
    onEditNote(newText)
    setnewTitle('')
    setnewdesc('')
    
  }

  return (
    <div className={isShow?"edit--window":"not--window"}>
    <div className="ineditor--window">
    <div className="title--window">
      <h4 className="detail--window">Title:  {Notes.title}</h4>
      <h5 className="detail--window">Description:  {Notes.description}</h5>
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