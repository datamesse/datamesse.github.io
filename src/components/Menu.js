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

        <div className='menu-container'>

            <div className='menu-buttons-container'>

                <Link to="/portfolio" onClick={start}>
                    <div className='menu-button-border menu-button-border-square'></div>
                    <div className='menu-button-highlight menu-button-highlight-square menu-button-highlight-blue'></div>
                    <div className='menu-button-gradient menu-button-gradient-square menu-button-gradient-blue'></div>
                    <img className='menu-button-icon' src={ icon_charthistogram } />
                </Link>

                <Link to="/blog" onClick={start}>
                    <div className='menu-button-border menu-button-border-circle'></div>
                    <div className='menu-button-highlight menu-button-highlight-circle menu-button-highlight-teal'></div>
                    <div className='menu-button-gradient menu-button-gradient-circle menu-button-gradient-teal'></div>
                    <img className='menu-button-icon' src={ icon_edit } />
                </Link>

                <Link to="/" onClick={start}>
                    <div className='menu-button-border menu-button-border-square'></div>
                    <div className='menu-button-highlight menu-button-highlight-square menu-button-highlight-pink'></div>
                    <div className='menu-button-gradient menu-button-gradient-square menu-button-gradient-pink'></div>
                    <img className='menu-button-icon' src={ icon_modeportrait } />
                </Link>

            </div>

            <div className='menu-labels-container'>

                <div className='menu-label'>
                    <div className='menu-label-light'></div>
                    <p>PORTFOLIO</p>
                </div>

                <div className='menu-label'>
                    <div className='menu-label-light'></div>
                    <p>BLOG</p>
                </div>

                <div className='menu-label'>
                    <div className='menu-label-light'></div>
                    <p>PROFILE</p>
                </div>

            </div>

        </div>

    )
}

export default Menu;