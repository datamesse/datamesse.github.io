import React from 'react';
import '../App.css';
import Separator from './Separator';
import { avatar } from '../data/assets';
import Links from './Links';
import Socials from './Socials';

function About() {
    return (

            <div className='about'>

                <Separator text="PROFILE" />
                
                <div className='about-panel'>

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

                    <div className='about-avatar'>
                        <img src={ avatar } />
                    </div>


                    <div className='about-description'>

                        <p>Software support veteran sharing his experiences in data analysis and technology.</p>
                        <p className='about-description-darken'>Specialising in Excel, Power BI, and SQL</p>

                        <br />

                        <p className='about-description-darken'>My portfolio:</p>

                        <ul>
                            <li>5 x published Power BI projects</li>
                            <li className='about-description-darken'>2 x downloadable Excel projects</li>
                            <li>1 x SQL Server project</li>
                            <li className='about-description-darken'>1 x this React.js + GitHub Pages site (4 versions)</li>
                            <li>18 blog spots since Sep 2021</li>
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