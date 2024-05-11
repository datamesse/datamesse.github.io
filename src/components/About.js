import React, { useRef, useEffect, useState } from 'react';
import '../App.css';
import Separator from './Separator';
import { avatar } from '../data/assets';
import Links from './Links';
import Socials from './Socials';

function About() {

    const myDiv = useRef(null);
    const [showTriangle, setShowTriangle] = useState(true);

    useEffect(() => {
        const div = myDiv.current;
        if (div) {
            div.onscroll = function() {
                if(div.scrollTop + div.clientHeight >= div.scrollHeight) {
                    setShowTriangle(false);
                } else {
                    setShowTriangle(true);
                }
            }
        }
    }, []);

    return (

            <div className='about'>

                <Separator text="PROFILE" />
                
                <div className='about-panel'>

                    <div className='about-background-top'></div>

                    <div className='about-background-right'></div>

                    <div className='about-blue-dash'></div>

                    <div className='about-name'>data messe</div>

                    <div className='about-subtext-container about-subtext-photo-position'>
                        <div className='about-rectangle'></div>
                        <div className='about-subtext'>RECENT PHOTOGRAPH</div>
                    </div>

                    <div className='about-subtext-container about-subtext-status-position'>
                        <div className='about-rectangle'></div>
                        <div className='about-subtext'>STATUS</div>
                    </div>

                    <div className='about-subtext-container-vertical about-subtext-gear-position'>
                        <div className='about-rectangle'></div>
                        <div className='about-subtext'>GEAR</div>
                    </div>

                    <div className='about-lanyard-clip'></div>

                    <div className='about-lanyard-tag'></div>

                    <div className='about-lanyard-text'>PICTURE ID</div>

                    <div className='about-avatar'>
                        <img src={ avatar } />
                    </div>

                    <div className='about-avatar about-avatar-shadow'>
                        <img src={ avatar } />
                    </div>

                    <div className='about-avatar-border'></div>

                    <div className='about-avatar-highlight'></div>

                    {showTriangle && <div className='about-scroll-triangle'>SCROLL ▼</div>}

                    <div className='about-description' ref={myDiv}>

                        <p className='about-description-darken'>A data tech enthusiast with over 7 years extensive work experience using SQL tools, Power BI, and Excel on software problems like a seasoned 19th century detective wielding their magnifying glass on a case.</p>

                        <br />

                        <p className='about-description-darken'>My personal portfolio:</p>

                        <ul>
                            <li>5 reports in Power BI Community Gallery</li>
                            <li className='about-description-darken'>2 downloadable Excel projects</li>
                            <li>1 SQL Server project</li>
                            <li className='about-description-darken'>20 blog posts since Sep 2021</li>
                            <li>1 this React.js + GitHub Pages site</li>
                        </ul>

                        <br />

                        <p className='about-description-darken'>"messe" is a German word for trade fair.</p>
                        <p className='about-description-darken'>For that namesake, I hope to showcase my fun works in data and tech to help inspire others.</p>

                        <br />

                    </div>

                    <Links />
                    <Socials />

                </div>

            </div>

    );
}

export default About;