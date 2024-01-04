import logo from './logo.svg';
import './App.css';
import Header from './components/topbar';
import Sidenav from './components/sidenav';
import React, { useState } from 'react';
function App() {
  const [sidenavState, setSidenavState] = useState('open');
  const [isLightTheme, setisLightTheme] = useState(false);


  const toggleTheme = () => {
    setisLightTheme(!isLightTheme);

  }

  const toggleSidenav = () => {
    switch (sidenavState) {
      case 'halfClosed':
        setSidenavState('fullyClosed');
        break;
      case 'fullyClosed':
        setSidenavState('open');
        break;
      case 'open':
        setSidenavState('halfClosed');
        break;
      default:
        break;
    }
  };
  return (
    <div className="App">
      <Header onMenuButtonClick={toggleSidenav} onThemeButtonClick={toggleTheme} isLight={isLightTheme} />
      {sidenavState !== 'fullyClosed' && <Sidenav sidenavState={sidenavState} isLight={isLightTheme} />}
    </div>
  );
}

export default App;
