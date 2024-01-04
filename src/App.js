import logo from './logo.svg';
import './App.css';
import Header from './components/topbar';
import Sidenav from './components/sidenav';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
function App() {
  const [sidenavState, setSidenavState] = useState('open');
  const [isLightTheme, setisLightTheme] = useState(false);
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

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
    console.log(sidenavState)
  };
  return (
    <div className="App">
      <Header onMenuButtonClick={toggleSidenav} onThemeButtonClick={toggleTheme} isLight={isLightTheme} toggleLang={toggleLanguage} />
      {sidenavState !== 'fullyClosed' && <Sidenav sidenavState={sidenavState} isLight={isLightTheme} />}
    </div>
  );
}

export default App;
