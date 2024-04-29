import React, { useState, useEffect, useCallback } from 'react';
import Note from './Note';
import ExportNotes from './ExportNotes';
import '../css/NotesArea.css';



const NotesArea = () => {
  const [notes, setNotes] = useState([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isWithinBounds, setIsWithinBounds] = useState(true);

  
  // Handle double click events to create new notes
  const handleDoubleClick = (event) => {
    // Extract clientX and clientY from the event
        const { clientX, clientY } = event;
        // Calculate new X and Y coordinates for the note based on clientX and clientY
        const newX = clientX - 100 - window.innerWidth / 8;
        const newY = clientY - 50 - window.innerHeight / 8;

        // Calculate right (r), left (l), top (t), and bottom (b) boundaries
        const r = window.innerWidth - (window.innerWidth / 4) - 100;
        // const l = 0;
        // const t = 0;
        const b = window.innerHeight - (window.innerHeight / 4) - 50;

        // alert('r = ' + r + ' b = ' + b);
        // alert('cr = ' + newX + ' cb = ' + newY);

        // Check if the new note should be created on the left side
        const leftside = 
        newX >= -100 && newX < 0;

        // Check if the new note should be created on the right side
        const rightside = 
        newX > r - 100 // cr > 916
        && newX <= r; // cr <= 1016

        //  alert('newX= '+newX+' newY= '+newY+' r-100= '+(r-100)+' r= '+r);
        // Check if the new note should be created on the top side
        const topside =  
        newY >= -100 && newY < 0;

        // Check if the new note should be created on the bottom side
        const bottomside = 
        newY > b - 60 && newY <= b; // 10px for ExportNotes


        // Handle different cases for creating new notes based on the side
        if(leftside) {
                  // Handle creation of notes on the left side
                  if(topside) {
                    // Handle creation of notes in the top-left corner
                    // Check if a note already exists in the top-left corner area
                    const existingNote = notes.some(
                      (note) =>
                        note.x >= 0 &&
                        note.x <= 100 &&
                        note.y >= 0 &&
                        note.y <= 50
                    );
            
                    if(existingNote) {
                      alert('A note already exists in this area');
                    } else {
                      // Create a new note in the top-left corner
                      const newNote = {
                        id: Date.now(),
                        x: 1, // Align to the left
                        y: 1, // Align to the top
                        text: 'Text Box',
                      };
                      console.log("New Note:", newNote);
                      setNotes([...notes, newNote]);
                    }
                  } else if(bottomside) {
                    // Handle creation of notes in the bottom-left corner
                    // Check if a note already exists in the bottom-left corner area
                    const existingNote = notes.some(
                      (note) =>
                        note.x >= 0 &&
                        note.x <= 100 &&
                        note.y >= b - 100 &&
                        note.y <= b
                    );
            
                    if(existingNote) {
                      alert('A note already exists in this area');
                    } else {
                      // Create a new note in the bottom-left corner
                      const newNote = {
                        id: Date.now(),
                        x: 1, // Align to the left
                        y: b - 50, // Align to the bottom
                        text: 'Text Box',
                      };
                      console.log("New Note:", newNote);
                      setNotes([...notes, newNote]);
                    }
                  } else {
                    // Handle creation of notes on the left side
                    // Check if a note already exists on the left side
                    const existingNote = notes.some(
                      (note) =>
                        note.x >= 0 &&
                        note.x <= 100 &&
                        Math.abs(note.y - newY) <= 100 // Check if any existing note is within 100 pixels vertically
                    );
            
                    if(existingNote) {
                      alert('A note already exists in this area');
                    } else {
                      // Create a new note on the left side
                      const newNote = {
                        id: Date.now(),
                        x: 1, // Align to the left
                        y: newY, // Use the new y position
                        text: 'Text Box',
                      };
                      console.log("New Note:", newNote);
                      setNotes([...notes, newNote]);
                    }
                  }
                } else if (rightside) {
                  // Handle creation of notes on the right side
                  if (topside) {
                    // Handle creation of notes in the top-right corner
                    // Check if a note already exists in the top-right corner area
                    const existingNote = notes.some(
                      (note) =>
                        note.x >= r - 200 &&
                        note.x <= r &&
                        note.y >= 0 &&
                        note.y <= 100
                    );
              
                    if (existingNote) {
                      alert('A note already exists in this area');
                    } else {
                      // Create a new note in the top-right corner
                      const newNote = {
                        id: Date.now(),
                        x: r - 101, // Align to the right
                        y: 1, // Align to the top
                        text: 'Text Box',
                      };
                      console.log("New Note:", newNote);
                      setNotes([...notes, newNote]);
                    }
                  } else if (bottomside) {
                    // Handle creation of notes in the bottom-right corner
                    // Check if a note already exists in the bottom-right corner area
                    const existingNote = notes.some(
                      (note) =>
                        note.x >= r - 200 &&
                        note.x <= r &&
                        note.y >= b - 100 &&
                        note.y <= b
                    );
              
                    if (existingNote) {
                      alert('A note already exists in this area');
                    } else {
                      // Create a new note in the bottom-right corner
                      const newNote = {
                        id: Date.now(),
                        x: r - 101, // Align to the right
                        y: b - 50, // Align to the bottom
                        text: 'Text Box',
                      };
                      console.log("New Note:", newNote);
                      setNotes([...notes, newNote]);
                    }
                  } else {
                        // Check if a note already exists on the right side or on the bottom side
                        const existingNote = notes.some(
                          (note) =>
                            (note.x >= r - 200 && note.x <= r 
                              && note.y >= newY - 100 
                              && note.y <= newY + 100) || 
                            (note.x >= newX - 200 
                              && note.x <= newX + 200 
                              && note.y >= b - 100 
                              && note.y <= b) 
                        );
                    
                        if (existingNote) {
                          alert('A note already exists in this area');
                        } else {
                          // Create a new note on the right side
                          const newNote = {
                            id: Date.now(),
                            x: r - 101, // Align to the right
                            y: newY, // Use the new y position
                            text: 'Text Box',
                          };
                          console.log("New Note:", newNote);
                          setNotes([...notes, newNote]);
                        }
                    }
          } else if(topside) {
                        // Handle creation of notes on the top side
                        // Check if a note already exists on the top side
                        const existingNote = notes.some(
                          (note) =>
                            note.x >= newX - 200 &&
                            note.x <= newX + 200 &&
                            note.y >= 0 &&
                            note.y <= 100
                        );
                  
                        if(existingNote) {
                          alert('A note already exists in this area');
                        } else {
                          // Create a new note on the top side
                          const newNote = {
                            id: Date.now(),
                            x: newX, // Use the new x position
                            y: 1, // Align to the top
                            text: 'Text Box',
                          };
                          console.log("New Note:", newNote);
                          setNotes([...notes, newNote]);
                        }
          } else if(bottomside) {
                        // Handle creation of notes on the bottom side
                        // Check if a note already exists on the bottom side
                        const existingNote = notes.some(
                          (note) =>
                            note.x >= newX - 200 &&
                            note.x <= newX + 200 &&
                            note.y >= b - 100 &&
                            note.y <= b
                        );
                  
                        if(existingNote) {
                          alert('A note already exists in this area');
                        } else {
                          // Create a new note on the bottom side
                          const newNote = {
                            id: Date.now(),
                            x: newX, // Use the new x position
                            y: b - 50, // Align to the bottom
                            text: 'Text Box',
                          };
                          console.log("New Note:", newNote);
                          setNotes([...notes, newNote]);
                        }
          }

        // Check if the cursor is within the bounds of the notes area
        if (
          clientX >= 0 &&
          clientY >= 0 &&
          clientX <= window.innerWidth - window.innerWidth / 8 - 100 &&
          clientY <= window.innerHeight - window.innerHeight / 8 - 50
        ) {

            
        
                  // Calculate new X and Y coordinates for the cursor
                  const isWithinBounds =
                    newX >= 0 &&
                    newX <= window.innerWidth - (window.innerWidth / 4) -200 &&
                    newY >= 0 &&
                    newY <= window.innerHeight - (window.innerHeight / 4) - 100;
                
                      // Check if the cursor is within the bounds of the notes area
                      if(isWithinBounds) {
                      // Check if any existing note overlaps with the new note
                    const existingNote = notes.find(
                      (note) =>
                        newX >= note.x - 200 &&
                        newX <= note.x + 200 &&
                        newY >= note.y - 100 &&
                        newY <= note.y + 100
                    );

                    // Check if an existing note overlaps with the new note
                    if (existingNote) {
                      alert('A note already exists in this area');
                    } else {
                      // Create a new note at the cursor position
                      const newNote = {
                        id: Date.now(),
                        x: newX, // Center the note horizontally
                        y: newY, // Center the note vertically
                        text: 'Text Box',
                      };
                      console.log("New Note:", newNote);
                      setNotes([...notes, newNote]);
                    }
                  }
                  else {
                      // alert('You are outside the allowed area');
                  }
        }
  };
  // Handle text change in notes
  const handleTextChange = (id, newText) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, text: newText } : note))
    );
  };

  // Handle mouse leave event
  const handleMouseLeave = () => {
    setIsWithinBounds(true); // Reset the bounds when mouse leaves
  };

  // Handle drag start event
  const handleDragStart = (event, id) => {
    event.dataTransfer.setData('text/plain', null);
    const note = notes.find((note) => note.id === id);
    if (note) {
      event.dataTransfer.setData('note', JSON.stringify(note));
    }
  };

  // Handle drag over event
  const handleDragOver = (event) => {
    event.preventDefault();
    const targetX = event.clientX - 100 - window.innerWidth / 8;
    const targetY = event.clientY - 50 - window.innerHeight / 8;
    setCursorPosition({ x: targetX, y: targetY });
    setIsWithinBounds(
      targetX >= 0 &&
      targetX <= window.innerWidth - window.innerWidth / 4 - 200 &&
      targetY >= 0 &&
      targetY <= window.innerHeight - window.innerHeight / 4 - 100
    );
  };
  

  // Handle drop event
  const handleDrop = (event) => {
    const droppedData = event.dataTransfer.getData('note');
  if (droppedData) {
    const droppedNote = JSON.parse(droppedData);
    const targetX = event.clientX;
    const targetY = event.clientY;
  
    const newX = targetX - 100 - window.innerWidth / 8;
    const newY = targetY - 50 - window.innerHeight / 8;

    // const leftside = 
    // newX >= -100 && newX < 0;

    // const rightside = 
    // newX > window.innerWidth - (window.innerWidth / 4) -200 && newY <= window.innerWidth - (window.innerWidth / 4);

    // const topside =  
    // newY >= -50 && newY < 0;

    // const bottomside = 
    // newY > window.innerHeight - (window.innerHeight / 4) - 100 && newY <= window.innerHeight - (window.innerHeight / 4);


    
    const isWithinBounds =
      newX >= 0 &&
      newX <= window.innerWidth - (window.innerWidth / 4) -200 &&
      newY >= 0 &&
      newY <= window.innerHeight - (window.innerHeight / 4) - 100;
  
    if (isWithinBounds) {
      // Check if any existing note overlaps with the dropped note
      const existingNote = notes.find(
        (note) =>
          newX >= note.x - 200 &&
          newX <= note.x + 200 &&
          newY >= note.y - 100 &&
          newY <= note.y + 100
      );
  
      if (existingNote && existingNote.id !== droppedNote.id) {
        // Merge the text of the dropped note with the existing note
        const updatedText = existingNote.text + ' ' + droppedNote.text;
        existingNote.text = updatedText;
        handleTextChange(existingNote.id, updatedText);
        setNotes(notes.filter((note) => note.id !== droppedNote.id));
      } else if (!existingNote) {
        // alert('New Note Created -- Width: ' + window.innerWidth);

        const newNote = {
          id: Date.now(),
          x: newX, // Center the note horizontally
          y: newY, // Center the note vertically
          text: droppedNote.text,
        };
        console.log('New Note:', newNote);
        setNotes([...notes, newNote]);
      }
    } else {
      alert('Out Of Bound');
    }
  }
  };


  // Handle window drag over event
  const handleWindowDragOver = (e) => {
    e.preventDefault();
  };


  // Handle window drop event
  const handleWindowDrop = useCallback((e) => {
    e.preventDefault();
    const text = e.dataTransfer.getData('text/plain');
    if (text) {
      const newX = e.clientX - 100 - window.innerWidth / 8;
      const newY = e.clientY - 50 - window.innerHeight / 8;
  
      const isWithinBounds =
        newX >= 0 &&
        newX <= window.innerWidth - (window.innerWidth / 4) - 200 &&
        newY >= 0 &&
        newY <= window.innerHeight - (window.innerHeight / 4) - 100;
  
      if (isWithinBounds) {
        const existingNote = notes.find(
          (note) =>
            newX >= note.x - 200 &&
            newX <= note.x + 200 &&
            newY >= note.y - 100 &&
            newY <= note.y + 100
        );
  
        if (existingNote) {
          // alert('A note already exists in this area');
        } else {
          const newNote = {
            id: Date.now(),
            x: newX,
            y: newY,
            text,
          };
          setNotes([...notes, newNote]);
        }
      }
    }
  }, [notes]);

  useEffect(() => {
    window.addEventListener('dragover', handleWindowDragOver);
    window.addEventListener('drop', handleWindowDrop);
  
    return () => {
      window.removeEventListener('dragover', handleWindowDragOver);
      window.removeEventListener('drop', handleWindowDrop);
    };
  }, [notes, handleWindowDrop]);
  

  

  return (
    <div>
      
      <div
        className="notes-area"
        onDoubleClick={handleDoubleClick}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onMouseLeave={handleMouseLeave} // Add mouse leave event handler
        style={{ backgroundColor: isWithinBounds ? 'transparent' : 'red' }} // Apply background color based on bounds
      >
        {notes
          .filter((note) => note.x >= 0 && note.y >= 0)
          .map((note) => (
            <Note
              key={note.id}
              note={note}
              onTextChange={handleTextChange}
              onDragStart={handleDragStart}
            />
          ))}
      </div>
      <ExportNotes
        notes={notes.filter((note) => note.x >= 0 && note.y >= 0)}
      />
      <div className="cursor-coordinates" style={{ left: cursorPosition.x, top: cursorPosition.y }}>
        {`X: ${cursorPosition.x}, Y: ${cursorPosition.y}`}
      </div>
    </div>
  );
};

export default NotesArea;
