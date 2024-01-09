import logo from './logo.svg';
import './App.css';
import Header from './components/topbar';
import Sidenav from './components/sidenav';
import React, { useState } from 'react';
import Login from './components/login';
function App() {
  const [sidenavState, setSidenavState] = useState('open');
  const [isLightTheme, setisLightTheme] = useState(false);
  const [islogin, setislogin] = useState(false);



  const toggleTheme = () => {
    setisLightTheme(!isLightTheme);
  }
  const loginf = () => {
    setislogin(prev => !prev)
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
      {islogin ? (
        <>
          <Header onMenuButtonClick={toggleSidenav} onThemeButtonClick={toggleTheme} isLight={isLightTheme} login={loginf} />
          {sidenavState !== 'fullyClosed' && <Sidenav sidenavState={sidenavState} isLight={isLightTheme} login={loginf} />}
        </>
      ) : (
        <Login login={loginf} />
      )}
    </div>
  );
}

export default App;
