import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from '@mui/icons-material/EditNote';


function Note(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }

    function handleEdit() {
        props.onEdit(props.id);
    }

  return (
    <div className="noteContainer">
        <div className="note">
          <h1>{props.title}</h1>
          <h2>{props.timeStamp}</h2>
          <p>{props.content}</p>
          <button onClick={handleEdit} >
            <EditNoteIcon />
          </button>
          <button onClick={handleDelete}>
            <DeleteIcon />
            </button>
        </div>
    </div> 
  );
}

export default Note;

