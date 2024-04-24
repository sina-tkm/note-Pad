
import TrashIcon from './component-icon/Icon.svg'
import NotePad from './component-icon/note-icon.svg'




function StyleNote(){

    return(
     <div className="container">

        <header className="left--container">
            <div className="header dashboard--header">
            <img src={TrashIcon} alt="Icon" className="trash trash--icon" />
            </div>
         <section className="storage storage--block">
        <span className="text text--block">salana</span>
      </section>
    </header>

    <div className="right--container">
    <div className="header right--header">
        <img src={NotePad}  alt="NotePad" className="note__pad--icon" />
        <div className="sort sort--input">
         <select name="" id="" className="select--input">
            <option value="">sort base on latest</option>
            <option value="">sort base on earliest</option>
            <option value="">sort base on completed</option>
         </select>
        </div>
        <div className="list--info">
            <div className="item--info">
                <p className="completed--info">completed</p>
                <span className="count--list"></span>
            </div>
            <div className="item--info">
                <p className="all--info">All</p>
                <span className="count--list"></span>
            </div>
            <div className="item--info">
                <p className="open--info">Open</p>
                <span className="count--list"></span>
            </div>
        </div>

    </div>
         <form action=""> 
         <input type="text" className='title--input' placeholder='title...' />
         <input type="text" className="text--input"  placeholder='description...' />
        
         </form>
</div>
    
        
     </div>
    )
}
export default StyleNote





