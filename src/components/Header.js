import React, { useState } from 'react';
import '../App.css';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import { icon_menuburger, letter_01, letter_08, letter_09, letter_10, letter_11, letter_13, letter_14, letter_18, letter_21 } from '../data/assets';


import { displayName, ascii2, ascii3, ascii4 } from '../data/data';

var headings = [displayName, ascii2+ascii3+ascii4];
var i = 0;
var intervalId = setInterval(function() {
  document.getElementById("title").innerHTML = headings[i];
  if (i == (headings.length - 1)) {
    i = 0;
  }
}, 1000)
/*
            <div className="sitename" id="title"></div>
*/

/*
            <div className="sitename" id="title">
                <img className="site-letter" src={ letter_10 } />
                <img className="site-letter" src={ letter_21 } />
                <img className="site-letter site-letter-space" src={ letter_14 } />
                <img className="site-letter" src={ letter_13 } />
                <img className="site-letter" src={ letter_01 } />
                <img className="site-letter" src={ letter_11 } />
                <img className="site-letter" src={ letter_21 } />
                <img className="site-letter" src={ letter_08 } />
                <img className="site-letter" src={ letter_01 } />
                <img className="site-letter" src={ letter_18 } />
                <img className="site-letter" src={ letter_09 } />
            </div>
*/

function Header() {

const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="header">
            <div className="sitename" id="title"></div>
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