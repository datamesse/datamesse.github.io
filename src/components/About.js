import React from 'react';
import '../App.css';
import { avatar, image_sentimentanalysis_animated } from '../data/assets';
import Links from './Links';

function About() {
    return (
        <div className='about'>

            <div className='about-top'>
                <div className='about-info'>
                    <div className='about-title'>
                        <img className='about-avatar' src={ avatar } />                    
                        <h1>data messe</h1>
                    </div>
                    <p>Hi, I'm a data analysis and visualisation specialist with over 8 years of customer service and technical troubleshooting experience.</p>
                    <p>My goal is to help great clients solve problems and make the best decisions they can using data.</p>
                    <div className='about-quote'>
                        <a href="https://en.wikipedia.org/wiki/Messe" target='_blank'>"messe" is a German word meaning trade fair;  - Wikipedia</a>
                    </div>
                </div>
                <div className='about-photo'>
                    <img className='about-image' src={ image_sentimentanalysis_animated } />
                </div>
            </div>

            <div className='about-bottom'>
                <Links />
            </div>

        </div>
    );
}

export default About;