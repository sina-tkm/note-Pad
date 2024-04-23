import "./app.css"
import TrashIcon from './component-icon/Icon.svg'
import NotePad from './component-icon/note-icon.svg'

function App(){
    return (
        <div className="container">
            <div className="left--container">
                <div className="header dashboard--header">
                <img src={TrashIcon} alt="Icon" className="trash trash--icon" />
                </div>
                <div className="storage storage--block">
                    <span className="text text--block"></span>
                </div>

            </div>
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
                     <input type="text" className="text--input" />
            </div>

        </div>
    )
}
export default App