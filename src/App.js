// App.js
import React from 'react';
import './App.css';
import  "./styles.css"
import Note from './components/Note';
import { useContext } from 'react';
import AddNote from './components/AddNote';
import { NoteContext } from './context/NoteContext';
import { NoteProvider } from './context/NoteContext';

import HeaderBar from './components/HeaderBar';
import Home from "./components/Home"
function App() {
  return (
    <NoteProvider>
      <div className="App">
        {/* <h1>Google Keep Clone</h1> */}
        {/* <Header/> */}
        <Home/>
        <div className='note-boxes'>
        <AddNote />
        <div className="notes-container">
          <NoteList />
        </div>
        </div>
      </div>
    </NoteProvider>
  );
}

const NoteList = () => {
  const { notes } = useContext(NoteContext);

  return notes.map((note) => (
    <Note
      key={note.id}
      id={note.id}
      title={note.title}
      content={note.content}
    />
  ));
};

export default App;
