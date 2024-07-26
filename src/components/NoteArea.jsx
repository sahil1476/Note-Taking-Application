import React from "react";
import { useState,useEffect } from "react";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import SaveAsIcon from '@mui/icons-material/SaveAs';

function NoteArea({ onAdd, onUpdate, editNote }){

    const [note, setNote] = useState({
        title: "",
        content: "",
        timeStamp:new Date().toTimeString(),
      });
    
      useEffect(() => {
        if (editNote) {
          setNote(editNote);
        }
      }, [editNote]);

      function handleChange(event) {
        const { name, value } = event.target;
    
        setNote(prevNote => ({
            ...prevNote,
            [name]: value,
          }));
      }
      
      function submitNote(event) {
        event.preventDefault();
        if (editNote) {
            onUpdate({ ...note, id: editNote.id, timeStamp: new Date().toTimeString() });
          } else {
            onAdd({ ...note, timeStamp: new Date().toTimeString() });
          }
          setNote({
            title: "",
            content: "",
            timeStamp: new Date().toTimeString(),
          });
        }


    return(
        <div>
            <form className="formClass">
                <div className="area">
                <input name="title" 
                       onChange={handleChange}
                       value={note.title} 
                       placeholder="Title.."
                />
                <textarea name="content" 
                       onChange={handleChange} 
                       value={note.content} 
                       placeholder="Take a note..." 
                />
                
                <button onClick={submitNote}>{editNote ? <SaveAsIcon /> : <LibraryAddIcon /> }</button>
                </div>
            </form>
        </div>
    );
}
export default NoteArea;