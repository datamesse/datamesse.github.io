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

                        <p>Software support veteran sharing his experiences in data analysis and technology.</p>
                        <p className='about-description-darken'>Specialising in Excel, Power BI, and SQL</p>

                        <br />

                        <p className='about-description-darken'>My portfolio:</p>

                        <ul>
                            <li>5 x published Power BI projects</li>
                            <li className='about-description-darken'>2 x downloadable Excel projects</li>
                            <li>1 x SQL Server project</li>
                            <li className='about-description-darken'>1 x this React.js + GitHub Pages site</li>
                            <li>19 blog spots since Sep 2021</li>
                        </ul>

                        <br />

                        <p>"messe" is a German word for trade fair.</p>
                        <p>For that namesake, I hope to showcase my fun works in data and technology to help inspire others.</p>

                    </div>

                    <Links />
                    <Socials />

                </div>

            </div>

    );
}

export default About;