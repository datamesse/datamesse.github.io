import React from 'react';
import '../App.css';
import { icon_charthistogram, icon_edit, icon_modeportrait } from '../data/assets';
import { HashLink as Link } from 'react-router-hash-link';

function Menu() {

    let soundEffect = new Audio('https://github.com/datamesse/datamesse.github.io/raw/main/src/assets-theme/mixkit-high-tech-bleep-confirmation-2520.wav')
    const start = () => {
        soundEffect.play()
      }

    return (

        <div className='menu-buttons-container'>

            <Link to="/portfolio" onClick={start}>
                <div className='menu-button-border menu-button-border-square'></div>
                <div className='menu-button-highlight menu-button-highlight-square menu-button-highlight-blue'></div>
                <div className='menu-button-gradient menu-button-gradient-square menu-button-gradient-blue'></div>
                <img className='menu-button-icon' src={ icon_charthistogram } />
                <div className='menu-button-light'></div>
                <p>PORTFOLIO</p>
            </Link>

            <Link to="/blog" onClick={start}>
                <div className='menu-button-border menu-button-border-circle'></div>
                <div className='menu-button-highlight menu-button-highlight-circle menu-button-highlight-teal'></div>
                <div className='menu-button-gradient menu-button-gradient-circle menu-button-gradient-teal'></div>
                <img className='menu-button-icon' src={ icon_edit } />
                <div className='menu-button-light'></div>
                <p>BLOG</p>
            </Link>

            <Link to="/" onClick={start}>
                <div className='menu-button-border menu-button-border-square'></div>
                <div className='menu-button-highlight menu-button-highlight-square menu-button-highlight-pink'></div>
                <div className='menu-button-gradient menu-button-gradient-square menu-button-gradient-pink'></div>
                <img className='menu-button-icon' src={ icon_modeportrait } />
                <div className='menu-button-light'></div>
                <p>PROFILE</p>
            </Link>

        </div>

    )
}

export default Menu;