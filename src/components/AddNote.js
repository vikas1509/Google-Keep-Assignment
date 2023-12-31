
import React, { useContext, useState } from 'react';
import { NoteContext } from '../context/NoteContext';

const AddNote = () => {
  const { addNote } = useContext(NoteContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '' || content.trim() !== '') {
      addNote({
        id: Math.random().toString(36).substr(2, 9),
        title,
        content, 
      });
      setTitle('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={content}
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <div className='addBtn-div'>
         <button type="submit" >Add Note</button>
         </div>
     
    </form>
  );
};

export default AddNote;
