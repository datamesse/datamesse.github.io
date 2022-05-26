import React from 'react';
import '../App.css';
import { avatar, background,
         image_sentimentanalysis_animated,
         icon_calendarlinespen, icon_charthistogram, icon_crosscircle, icon_diploma, icon_edit, icon_magicwand, icon_menuburger, icon_paperplane, 
         logo_github, logo_linkedin, logo_powerbi, logo_tableau, logo_twitter, 
         logoblue_github, logoblue_linkedin, logoblue_powerbi, logoblue_tableau, logoblue_twitter 
} from '../data/assets';
import Links from './Links';

function About() {
    return (
        <div className='about'>

            <div className='about-top'>
                <div className='about-info'>
                    data messe
                    <br /> messe is a German word meaning trade fair;
                    <br /> - Wikipedia.org
                    <br />(https://en.wikipedia.org/wiki/Messe)
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