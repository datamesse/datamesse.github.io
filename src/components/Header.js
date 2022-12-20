import React, { useState } from 'react';
import '../App.css';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import { icon_menuburger, 
         title_a, title_b, title_c, title_d, title_e
} from '../data/assets';
import Links from './Links';
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


/*
                <div className="header-body">

                    <h2><a href='/'>data messe</a></h2>
*/

/*
                    <div className="sitename" id="title">
                        <a href='/'>
                            <img className="site-title" src={ title_e } />
                            <img className="site-title" src={ title_d } />
                            <img className="site-title" src={ title_c } />
                            <img className="site-title" src={ title_b } />
                            <img className="site-title" src={ title_a } />
                        </a>
                    </div>
*/

function Header() {

const [isOpen, setIsOpen] = useState(false)

const script = document.createElement("script");
script.src = "https://raw.githubusercontent.com/datamesse/datamesse.github.io/main/src/assets-theme/banner-stars.js";
script.async = true;
document.body.appendChild(script);


/*

*/

    return (
        <>
            <div className="header">
                <div className="header-body">

                    <div className="sitename" id="title">
                        <a href='/'>
                            data messe
                        </a>
                    </div>

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

                <div className="header-subtitle">
                    <Links />
                    <div className="header-subtitle-line">
                        <center>
                            <p>DATA ANALYTICS AND POWER BI ENTHUSIAST</p>
                        </center>
                    </div>
                </div>

            </div>
        </>
    )

}



export default Header;