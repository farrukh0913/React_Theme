import { useState } from 'react';
import '../styles/topbar.css'
import { useTranslation } from 'react-i18next';

function Header({ onMenuButtonClick, onThemeButtonClick, isLight, toggleLang, login }) {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    const toggleLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setCurrentLanguage(lang);
    };
    const [menuOpen, setmenuOpen] = useState(false)
    const [selectedImg, setselectedImg] = useState('https://cdn.pixabay.com/photo/2012/04/10/16/14/union-jack-26119_640.png')
    const toggleMenu = () => {
        setmenuOpen(prev => !prev)
    }
    const itemClick = (pic, lang) => {
        setselectedImg(pic)
        setmenuOpen(false)
        toggleLanguage(lang)
    }
    return (
        <div className="App">
            <div className={`top-bar-container ${isLight ? 'top-bar-container' : 'bg-dark'}`} >
                <div className="logo-container">
                    <i className="fa-solid fa-bars" onClick={onMenuButtonClick}></i>
                    <div className='profile-container'>
                        <img className='profile-img' src='https://github.com/mdo.png' alt='sd' />
                    </div>

                </div>
                <div className='theme-icon-container' onClick={onThemeButtonClick}>
                    {isLight ? <i class="fa-regular fa-sun"></i> : <i className="fa-regular fa-moon"></i>}
                    <span>{isLight ? t('sidenav.light') : t('sidenav.dark')}</span>
                </div>

                <div className="language-change-container">
                    <div className={`${isLight ? 'logout-bt-container-light' : 'logout-bt-container'}`} onClick={login}>
                        <i className={`fa-solid fa-arrow-right-from-bracket`}></i>
                        <span>Log Out</span>
                    </div>
                    <div className="menu-container">

                        <div className="menu-header" onClick={toggleMenu}>
                            <img src={selectedImg} alt='sd' />
                        </div>
                        {menuOpen && <div className="menu-list" >
                            <div
                                onClick={() => itemClick('https://cdn.pixabay.com/photo/2012/04/10/16/14/union-jack-26119_640.png', 'en')}
                            >
                                <img alt='sd'
                                    src="https://cdn.pixabay.com/photo/2012/04/10/16/14/union-jack-26119_640.png"
                                /><span> EN</span>
                            </div>
                            <div
                                onClick={() => itemClick('https://static4.depositphotos.com/1009841/285/i/450/depositphotos_2858036-stock-photo-flag-of-france.jpg', 'fr')}
                            >
                                <img alt='df'
                                    src="https://static4.depositphotos.com/1009841/285/i/450/depositphotos_2858036-stock-photo-flag-of-france.jpg"
                                /><span>FR</span>
                            </div>
                        </div>}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
