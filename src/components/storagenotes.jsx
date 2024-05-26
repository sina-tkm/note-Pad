

import {  useContext, useState} from 'react';
import TrashIcon from '../component-icon/Icon.svg';
import {ChevronDownIcon} from "@heroicons/react/24/outline"
import { NoteContext } from './HeaderComp';
import { useDispatch, useNotes } from './contexts/notelist';




function StorageNotes({onAddEdit,onchange,pull,handlePull}) {
  

const {sortBy} = useContext(NoteContext)
const [open,setopen] =useState(null);
const dispatch = useDispatch() 
const notestore = useNotes()
 


  const handleOpen = (id)=>{
    setopen(id === open ? null :id)
  }
  let sortedNotes = notestore
  
  if (sortBy === "earliest")
    sortedNotes = [...notestore].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    ); // a -b  => a > b ? 1 : -1

  if (sortBy === "latest")
    sortedNotes = [...notestore].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    ); // b -a  => a > b ? -1 : 1

  if (sortBy === "completed")
    sortedNotes = [...notestore].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );

  
  return (
      <header className= { pull && window.innerWidth<=500 ? "left--badge" : "left--container"} id='cheat--code' onClick={()=>handlePull()}> 
      <div className="header dashboard--header">
      <img src={TrashIcon}
      alt="Icon"
      className="trash trash--icon" 
      onClick={()=>dispatch({type:"delete"})}/>
      </div>
       <section className="storage storage--block">
       <h3 className={![...notestore].length ? "showtext": "not"}>no item...</h3>
     {sortedNotes.map(note=>{
      return(
      <ListMarup 
        key={note.id} 
        dyno={note} 
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






function ListMarup({dyno,onOpen,open,onAddEdit,onChange}){
  const dispatch = useDispatch()
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
        </div>
        <div className="checkList right">
        <input
        value={dyno.id}
        onChange={((e)=>{
          const checklist = Number(e.target.value)
          dispatch({type:"completed",payload:checklist})
        })}
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
