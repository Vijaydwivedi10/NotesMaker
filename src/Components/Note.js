import React from 'react';
import '../css/Note.css';

const Note = ({ note, onTextChange, onDragStart }) => {
  const handleTextChange = (event) => {
    onTextChange(note.id, event.target.value);
  };

  const handleDragStart = (event) => {
    onDragStart(event, note.id);
  };

  return (
    <div
      className="note"
      style={{
        left: note.x,
        top: note.y,
      }}
      draggable
      onDragStart={handleDragStart}
    >
      <textarea
        className="note-text"
        value={note.text}
        onChange={handleTextChange}
      />
    </div>
  );
};

export default Note;
