import { useState } from "react";
import { useDispatch } from "./contexts/notelist";

function EditorComponent({ Notes, isClose, isShow, submitClose }) {
  return isShow ? (
    <EditModal
      Notes={Notes}
      isClose={isClose}
      isShow={isShow}
      submitClose={submitClose}
    />
  ) : null;
}

export default EditorComponent;

function EditModal({ Notes, isClose, submitClose }) {
  const [title, setnewTitle] = useState(Notes.title);
  const [description, setnewdesc] = useState(Notes.description);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const newText = {
      title,
      description,
      id: Notes.id,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    dispatch({ type: "edit", payload: newText });
    setnewTitle("");
    setnewdesc("");
    submitClose();
  };

  const option = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <div className="edit--window">
      <div className="ineditor--window">
        <div className="title--window">
          <h4 className="detail--window">Title: {Notes.title}</h4>
          <h5 className="detail--window">Description: {Notes.description}</h5>
          <div className="date--time">
            {new Date(Notes.date).toLocaleDateString("en-US", option)}
          </div>
        </div>

        <div className="input--window">
          <div className="input--form">
            <input
              type="text"
              className="title--edit-input"
              placeholder="Edit title..."
              value={title}
              onChange={(e) => setnewTitle(e.target.value)}
            />
            <input
              type="text"
              className="title--edit-input"
              placeholder="Edit description..."
              value={description}
              onChange={(e) => setnewdesc(e.target.value)}
            />
            <div className="submit--button">
              <form onSubmit={handleSubmit}>
                <button type="submit" className="submit">
                  Submit
                </button>
              </form>
              <button className="cancel" onClick={isClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
