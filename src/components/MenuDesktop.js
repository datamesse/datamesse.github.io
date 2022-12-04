import React from 'react';
import '../App.css';
import { icon_charthistogram, icon_diploma, icon_edit, icon_paperplane
  } from '../data/assets';
import { HashLink as Link } from 'react-router-hash-link';

/*
            <div className='menu-desktop-option'>
                <Link to="/#contact">
                    <img className='menu-option' src={ icon_paperplane } />CONTACT
                </Link>
            </div>
*/

function MenuDesktop() {
    return (
        <div className='menu-desktop'>
            <div className='menu-desktop-option'>
                <Link to="/portfolio">
                    <img className='menu-option' src={ icon_charthistogram } />PORTFOLIO
                </Link>
            </div>
            <div className='menu-desktop-option'>
                <Link to="/blog">
                    <img className='menu-option' src={ icon_edit } />BLOG
                </Link>
            </div>
            <div className='menu-desktop-option'>
                <Link to="/#skills">
                    <img className='menu-option' src={ icon_diploma } />SKILLS
                </Link>
            </div>
        </div>
    );
}

export default MenuDesktop;