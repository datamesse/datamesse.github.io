import React, { useState } from 'react';
import '../App.css';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import { icon_menuburger, 
         letter_01, letter_08, letter_09, letter_10, letter_11, letter_13, letter_14, letter_18, letter_21,
         title_a, title_b, title_c, title_d, title_e
} from '../data/assets';
import { displayName, ascii2, ascii3, ascii4 } from '../data/data';

/*
var headings = [displayName, ascii2+ascii3+ascii4];
var i = 0;
var intervalId = setInterval(function() {
  document.getElementById("title").innerHTML = headings[i];
  if (i == (headings.length - 1)) {
    i = 0;
  }
}, 1000)

            <div className="sitename" id="title"></div>
*/

function Header() {

const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="header">
                <h2>data messe</h2>
                <div className="menu">
                    <div className="menu-desktop">
                        <MenuDesktop />
                    </div>
                    <div className="menu-mobile">
                        <div onClick={() => setIsOpen(!isOpen)}>
                            <img className="menu-icon" src={ icon_menuburger } />
                        </div>
                        {isOpen && <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;