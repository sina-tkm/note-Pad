



function SortHeader({sortBy,onSort}) {
  
 

  
  
 
  return (
    <div className="sort sort--input">
    <select value={sortBy} onChange={onSort} >
       <option value="latest">sort base on latest</option>
       <option value="earliest">sort base on earliest</option>
       <option value="completed">sort base on completed</option>
      
    </select>
     
   </div>
  )
}

export default SortHeader