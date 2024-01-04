import { useState } from 'react';
import '../styles/topbar.css'


function Header({ onMenuButtonClick, onThemeButtonClick, isLight }) {
    const [menuOpen, setmenuOpen] = useState(false)
    const [selectedImg, setselectedImg] = useState('https://cdn.pixabay.com/photo/2012/04/10/16/14/union-jack-26119_640.png')

    const toggleMenu = () => {
        setmenuOpen(prev => !prev)
    }
    const itemClick = (pic) => {
        setselectedImg(pic)
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
                    <i className="fa-regular fa-moon"></i>
                    <span>{isLight ? 'Light' : 'Dark'}</span>
                </div>
                <div className="language-change-container">

                    <div className="menu-container">

                        <div className="menu-header" onClick={toggleMenu}>
                            <img src={selectedImg} alt='sd' />
                        </div>
                        {menuOpen && <div className="menu-list" >
                            <div
                                onClick={() => itemClick('https://cdn.pixabay.com/photo/2012/04/10/16/14/union-jack-26119_640.png')}
                            >
                                <img alt='sd'
                                    src="https://cdn.pixabay.com/photo/2012/04/10/16/14/union-jack-26119_640.png"
                                /><span> EN</span>
                            </div>
                            <div
                                onClick={() => itemClick('https://static4.depositphotos.com/1009841/285/i/450/depositphotos_2858036-stock-photo-flag-of-france.jpg')}
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