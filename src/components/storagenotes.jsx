

import { useState} from 'react';
import TrashIcon from '../component-icon/Icon.svg';
import {ChevronDownIcon} from "@heroicons/react/24/outline"







function StorageNotes({handleDelete,onComplete,noteStore,sortBy,onAddEdit,onchange,handleDraw,draw}) {

  const [show,setshow]=useState(false);
  const [open,setopen] =useState(null);
  
  






 
  const handleOpen = (id)=>{
    setopen(id === open ? null :id)
  }
  let sortedNotes = noteStore
  switch (sortBy) {
    case "earliest":
      sortedNotes.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      break;
    case "latest":
      sortedNotes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      break;
    case "completed":
      sortedNotes.sort((a, b) => Number(a.completed) - Number(b.completed));
      break;
    default:
     
      break;
  }
  
  return (
      <header className= {draw &&window.innerWidth<=500 ? "left--badge" : "left--container"} onClick={handleDraw}>
    <div className="header dashboard--header">
      <img src={TrashIcon}
      alt="Icon"
      className="trash trash--icon" 
      onClick={()=>(setshow((is)=>!is))}/>
    </div>
       <section className="storage storage--block">
       <h3 className={!noteStore.length ? "showtext": "not"}>no item...</h3>
     {sortedNotes.map(note=>{
      return(
      <ListMarup 

     
       noteStore={noteStore}
        key={note.id} 
        dyno={note} 
        trashcanshow= {show} 
        handleDelete= {handleDelete} 
        onComplete={onComplete}
        onOpen={handleOpen}
        open= {open}
        onAddEdit={onAddEdit}
        onChange={onchange}
        
        
        
       />) 
     })}
</section>
</header>
  )
}

export default StorageNotes



function ListMarup({dyno,trashcanshow,handleDelete,onOpen,open,onAddEdit,onChange,onComplete}){



 const isOpen = dyno.id === open
 const onEdit = ()=>{
const storage = [{
  title:dyno.title,
  description:dyno.description,
  id:dyno.id,
  date:dyno.createdAt


}]
onAddEdit(storage)
 }

  const option = {
    year:"numeric",
    month:"short",
    day:"numeric"
  }
  
 
  
  return(
 <div  className={ `${isOpen ? "text__block-content":"text--block"}`} >
  <div className="text--content">
    <div className='title--box'  onClick={()=>onOpen(dyno.id)}>
       <h3 className="title left">{dyno.title}</h3>
      <ChevronDownIcon 
      style={{
        height:"100%",
        display:"flex",
        alignItems:"center",
        width:"12px",
        transition: 'all .3s ease-in-out',
        transformOrigin:"center",
        rotate: isOpen ? "180deg" : "0deg"
      }}
      />
    </div>
   
    <p className="description left"  onClick={()=>{onEdit();onChange();}}>{dyno.description}</p>
  <div className="date left">
      {new Date(dyno.createdAt).toLocaleDateString('en-US',option)}
    </div>
   </div>
  <div className="action">
    <div className="trashcan--check">
      <div className="trashCan right">
        <img src={TrashIcon}
        alt="Icon"
        onClick={()=>handleDelete(dyno.id)}  
        className={trashcanshow ? "trashbox" : "hiddentrash"}/>
        </div>
        <div className="checkList right">
        <input
        value={dyno.id}
        onChange={onComplete}
        checked={dyno.completed}
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
