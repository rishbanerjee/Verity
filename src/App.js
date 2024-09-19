import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecentNews from './components/RecentNews';
import History from './components/History';

function App() {
  const [loading, setLoading] = useState(false);

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      setLoading(true);
      // Simulate a network request or loading process
      setTimeout(() => {
        setLoading(false);
      }, 100000000); // Adjust time as needed
    }
  };

  return (
    <div id="app-container">
      {loading ? (
        <div className="loading-screen">
          <div className="loading-text-container">
            <div className="loading-text">
              Verity...
            </div>
          </div>
        </div>
      ) : (
        <>
          <Header className="hide-during-loading" />
          <SearchBar onKeyDown={handleSearch} className="hide-during-loading" />
          <div className="content-section hide-during-loading">
            <RecentNews />
            <History />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
