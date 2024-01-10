import React, { useState } from 'react';
import Header from './components/topbar'
import Sidenav from './components/sidenav'


function Layout() {
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
        <>

            <Header onMenuButtonClick={toggleSidenav} onThemeButtonClick={toggleTheme} isLight={isLightTheme} />
            {sidenavState !== 'fullyClosed' && <Sidenav sidenavState={sidenavState} isLight={isLightTheme} />}

        </>
    )
}
export default Layout