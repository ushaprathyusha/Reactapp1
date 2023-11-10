import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import AboutPage from './Components/AboutPage';
import IcePage from './IcePage';

function App() {
  const [showAboutPage, setShowAboutPage] = useState(false);
  const [showIcePage, setShowIcePage] = useState(false);

  const handleAboutClick = () => {
    setShowAboutPage(true);
  }
  const handleIceClick = () => {
    setShowIcePage(true);
   };

  return (
      <div className="App">
    <Header onAboutClick={handleAboutClick} onIceClick={handleIceClick} />
    <AboutPage showAboutPage={showAboutPage} />
    {showIcePage && <IcePage />}
  </div>

  );
}

export default App;