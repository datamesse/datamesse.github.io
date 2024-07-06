import React from 'react';
import '../App.css';
import { icon_charthistogram, icon_edit, icon_modeportrait, sound_menubutton } from '../data/assets';
import { HashLink as Link } from 'react-router-hash-link';

function Menu() {

    let soundEffect = new Audio(sound_menubutton)
    const start = () => {
        soundEffect.play()
      }

    return (

        <div className='menu-container'>

            <div className='menu-buttons-container'>

                <Link to="/" onClick={start}>
                    <div className='menu-button-border menu-button-border-square'></div>
                    <div className='menu-button-highlight menu-button-highlight-square menu-button-highlight-orange'></div>
                    <div className='menu-button-gradient menu-button-gradient-square menu-button-gradient-orange'></div>
                    <img className='menu-button-icon' src={ icon_modeportrait } loading='lazy'/>
                </Link>

                <Link to="/portfolio" onClick={start}>
                    <div className='menu-button-border menu-button-border-square'></div>
                    <div className='menu-button-highlight menu-button-highlight-square menu-button-highlight-blue'></div>
                    <div className='menu-button-gradient menu-button-gradient-square menu-button-gradient-blue'></div>
                    <img className='menu-button-icon' src={ icon_charthistogram } loading='lazy'/>
                </Link>

                <Link to="/blog" onClick={start}>
                    <div className='menu-button-border menu-button-border-square'></div>
                    <div className='menu-button-highlight menu-button-highlight-square menu-button-highlight-teal'></div>
                    <div className='menu-button-gradient menu-button-gradient-square menu-button-gradient-teal'></div>
                    <img className='menu-button-icon' src={ icon_edit } loading='lazy'/>
                </Link>

            </div>

            <div className='menu-labels-container'>

                <div className='menu-label'>
                    <div className='menu-label-light'></div>
                    <p>PROFILE</p>
                </div>

                <div className='menu-label'>
                    <div className='menu-label-light'></div>
                    <p>PORTFOLIO</p>
                </div>

                <div className='menu-label'>
                    <div className='menu-label-light'></div>
                    <p>BLOG</p>
                </div>

            </div>

            <div className='menu-shade-background'></div>

        </div>

    )
}

export default Menu;