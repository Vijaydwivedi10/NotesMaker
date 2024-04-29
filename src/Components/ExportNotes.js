import React from 'react';
import * as xlsx from 'xlsx';

const ExportNotes = ({ notes }) => {
  const handleExport = () => {
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(notes.map(note => ({
      'Note Text': note.text,
      'Top Distance': note.y,
      'Left Distance': note.x,
      'Top-Left Distance': Math.sqrt(note.x ** 2 + note.y ** 2)
    })));
    xlsx.utils.book_append_sheet(wb, ws, 'Notes');
    xlsx.writeFile(wb, 'notes.xlsx');
  };

  return (
    <button onClick={handleExport}>Export Notes</button>
  );
};

export default ExportNotes;
