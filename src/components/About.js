import React from 'react';
import '../App.css';
import { avatar, image_sentimentanalysis_animated } from '../data/assets';
import { icon_menuburger, 
    letter_01, letter_08, letter_09, letter_10, letter_11, letter_13, letter_14, letter_18, letter_21,
    title_a, title_b, title_c, title_d, title_e
} from '../data/assets';
import Links from './Links';

/*
                    <div className='about-quote'>
                        <a href="https://en.wikipedia.org/wiki/Messe" target='_blank'>"messe" is a German word meaning trade fair;  - Wikipedia</a>
                    </div>
*/

function About() {
    return (
        <div className='about'>

            <div className='about-top'>
                <div className='about-info'>
                    <div className='about-title'>
                        <img className='about-avatar' src={ avatar } />    


                        <div className="sitename" id="title">
                <a href='/'>
                    <img className="site-title" src={ title_e } />
                    <img className="site-title" src={ title_d } />
                    <img className="site-title" src={ title_c } />
                    <img className="site-title" src={ title_b } />
                    <img className="site-title" src={ title_a } />
                </a>
            </div>                

                    </div>

                    <p>Hi, I'm a data analysis and visualisation enthusiast with over 8 years of customer service and technical troubleshooting experience.</p>
                    <p>My goal is to help great clients solve problems and make the best decisions they can using data.</p>
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