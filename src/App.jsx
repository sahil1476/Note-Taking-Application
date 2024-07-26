import './App.css';
import { useState,useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import NoteArea from './components/NoteArea';
import SearchNote from './components/SearchNote';
import Note from './components/Note';

// GEt Data from Local Storage
const getLocalData = () => {
  let notes = localStorage.getItem('notes');
  console.log(notes);
  if (notes) {
    return JSON.parse(localStorage.getItem('notes'));
  }else{
    return [];
  }
}

function App() {
  // Before implementing Local Storage
  // const [notes, setNotes] = useState([]);
  // After implementing Local Storage
  const [notes, setNotes] = useState(getLocalData());
  const [editNote, setEditNote] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [searchActive, setSearchActive] = useState(false); // State to track if search is active

  // useEffect(() => {
  //   const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  //   setNotes(savedNotes);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('notes', JSON.stringify(notes));
  // }, [notes]);

  useEffect(() => {
    localStorage.setItem('notes',JSON.stringify(notes));
  }, [notes]); 

  function addNote(newNote){
    setNotes(prevNotes => {
      return [...prevNotes, { ...newNote, id: prevNotes.length }];
    })
  }

  function updatedNote(updatedNote) {
    setNotes(prevNotes => {
      return prevNotes.map((note, index) => index === updatedNote.id ? updatedNote : note);
    });
    setEditNote(null);
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  const handleEdit = (index) => {
    setEditNote({ ...notes[index],id: index});
  };
  

  //search functionality code
  
       // const filteredNotes = notes.filter(note =>
       //   note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       //   note.content.toLowerCase().includes(searchQuery.toLowerCase())
       // );

  const [currentPage, setCurrentPage] = useState(1);
  // implementation of paging state management

const NOTES_PER_PAGE = 10;
// const paginatedNotes = notes.slice((currentPage - 1) * NOTES_PER_PAGE, currentPage * NOTES_PER_PAGE);
const paginatedNotes = (searchActive ? filteredNotes : notes).slice(
                                                (currentPage - 1) * NOTES_PER_PAGE, 
                                                currentPage * NOTES_PER_PAGE
                        );

  function handleSearch() {
    if (searchQuery.trim() === "") {
      setSearchActive(false);
      setFilteredNotes([]);
    } else {
      const filtered = notes.filter(note =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredNotes(filtered);
      setSearchActive(true);
      setCurrentPage(1); //This will Reset to first page when a new search is performed
    }
  }
  function clearSearch() {
    setSearchQuery("");
    setSearchActive(false);
    setFilteredNotes([]);
  }

return (
  <div>
    <Header />
    {/* Content Area */}
    <NoteArea onAdd={addNote} onUpdate={updatedNote}  editNote={editNote} />
    <SearchNote searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery} 
                onSearch={handleSearch}/>
      {searchActive && (
        <button onClick={clearSearch} className='clear-search'>Clear Search</button>
      )}          
    {/* End of content area */}
    {/* Display Notes */}
    {paginatedNotes.map((noteItem, index) => {
      return (
        <Note key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              timeStamp={noteItem.timeStamp}
              onDelete={deleteNote}
              // onEdit={handleEdit}
              onEdit={() => handleEdit(index)} />
      );
    })}
    <div className="pagination">
      {[...Array(Math.ceil((searchActive ? filteredNotes.length : notes.length) / NOTES_PER_PAGE))].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={index + 1 === currentPage ? 'active' : ''}
        >
          {index + 1}
        </button>
      ))}
    </div>
    <Footer />
  </div>
);
}

export default App;
