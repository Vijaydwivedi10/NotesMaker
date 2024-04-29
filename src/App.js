import React, { useState, useEffect } from 'react';
import NotesArea from './Components/NotesArea';
import './App.css';
import './Splash.css';  // Include the new CSS for splash screen

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // Show the splash screen for 4 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {showSplash ? (
        <div className="splash-screen">
          <div className="one-geo">ONE-GEO</div>
          Interactive Note-taking Application in ReactJS
        </div>
      ) : (
        <div className="app-content">
          <NotesArea />
        </div>
      )}
    </div>
  );
};

export default App;
