import React from 'react';
import '../App.css';
import { icon_charthistogram, icon_crosscircle, icon_diploma, icon_edit, icon_magicwand, icon_menuburger, icon_paperplane
} from '../data/assets';
import { HashLink as Link } from 'react-router-hash-link';

function MenuMobile({isOpen, setIsOpen}) {
    return (
        <div className='menu-mobile'>
            <div onClick={() => setIsOpen(!isOpen)}>
                <img className='close-icon' src={ icon_crosscircle } />
            </div>

            <div className='menu-mobile-options'>
               <div className='menu-mobile-option'>
                    <Link to="/#portfolio">
                        <img className='menu-option' src={ icon_charthistogram } />PORTFOLIO
                  </Link>
                </div>
                <div className='menu-mobile-option'>
                    <Link to="/#blog">
                        <img className='menu-option' src={ icon_edit } />BLOG
                    </Link>
                </div>
                <div className='menu-mobile-option'>
                    <Link to="/#skills">
                        <img className='menu-option' src={ icon_diploma } />SKILLS
                    </Link>
                </div>
                <div className='menu-mobile-option'>
                    <Link to="/#contact">
                        <img className='menu-option' src={ icon_paperplane } />CONTACT
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MenuMobile;