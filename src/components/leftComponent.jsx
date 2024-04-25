import { useState} from 'react'
import TrashIcon from '../component-icon/Icon.svg'






function LeftComponent({handleDelete,onComplete,noteStore}) {
  const [show,setshow]=useState(false)
 
  return (
    <header className="left--container">
    <div className="header dashboard--header">
    <img src={TrashIcon}
     alt="Icon"
      className="trash trash--icon" 
      onClick={()=>(setshow((is)=>!is))}/>
    </div>
 <section className="storage storage--block">
 <h3 className={!noteStore.length ? "showtext": "not"}>no item...</h3>
     {noteStore.map(note=>{
      return(<ListMarup 
        noteStore = {noteStore}
        key={note.id} 
        dyno={note} 
        trashcanshow= {show} 
        handleDelete= {handleDelete} 
        onComplete={onComplete}
        
       />) 
     })}
</section>
</header>
  )
}

export default LeftComponent



function ListMarup({dyno,trashcanshow,handleDelete,onComplete}){
  const option = {
    year:"numeric",
    month:"short",
    day:"numeric"
  }
 
  
  return(
 <div  className="text text--block">
  <div className="text--content">
    <h3 className="title left">{dyno.title}</h3>
    <p className="description left">{dyno.description}</p>
    <div className="date left">{new Date(dyno.createdAt).toLocaleDateString('en-US',option)}</div>
  </div>
  <div className="action">
   
    <div className="trashcan--check">
      <div className="trashCan right"><img src={TrashIcon}
      alt="Icon"
      onClick={()=>handleDelete(dyno.id)}  
      className={trashcanshow ? "trashbox" : "hiddentrash"}/>
      </div>
      <div className="checkList right">
        <input
        value={dyno.id}
        onChange={onComplete}
         type="checkbox"
          name={dyno.id} 
          id={dyno.id} 
          className='checkbox' />
      </div>
    </div>
  </div>
 </div>
  )
 }
