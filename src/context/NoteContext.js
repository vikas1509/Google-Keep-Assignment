import React, { createContext, useEffect } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage'; // Import your useLocalStorage hook

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [storedNotes, setStoredNotes] = useLocalStorage('notes', []); // Use useLocalStorage hook

  useEffect(() => {
    // Handle retrieving data from local storage and format it if necessary
    const notesFromStorage = JSON.parse(localStorage.getItem('notes'));
    if (notesFromStorage) {
      // If data exists in local storage, set it as the initial state
      setStoredNotes(notesFromStorage);
    }
  }, []); // This effect runs only once on initial mount

  const addNote = (newNote) => {
    const updatedNotes = [newNote, ...storedNotes];
    setStoredNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = storedNotes.filter((note) => note.id !== id);
    setStoredNotes(updatedNotes);
  };

  const editNote = (id, newTitle, newContent) => {
    const updatedNotes = storedNotes.map((note) =>
      note.id === id ? { ...note, title: newTitle, content: newContent } : note
    );
    setStoredNotes(updatedNotes);
  };

  return (
    <NoteContext.Provider value={{ notes: storedNotes, addNote, deleteNote, editNote }}>
      {children}
    </NoteContext.Provider>
  );
};
