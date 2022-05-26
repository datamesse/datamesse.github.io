import React, { useState } from 'react';
import '../App.css';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import { icon_menuburger, icon_edit, icon_diploma, icon_paperplane,
    avatar, background, 
    logo_github, logo_linkedin, logo_powerbi, logo_tableau, logo_twitter, 
    logoblue_github, logoblue_linkedin, logoblue_powerbi, logoblue_tableau, logoblue_twitter 
  } from '../data/assets'
import { displayName, ascii0, ascii1, ascii2, ascii3, ascii4, bannerDescription, githubURL, powerbiURL, tableauURL, twitterURL } from '../data/data'

var headings = [ascii2+ascii3+ascii4, displayName];
var i = 0;
var intervalId = setInterval(function() {
  document.getElementById("title").innerHTML = headings[i];
  if (i == (headings.length - 1)) {
    i = 0;
  }
}, 1000)

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