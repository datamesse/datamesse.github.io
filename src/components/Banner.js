import { render } from '@testing-library/react';
import React from 'react';
import { avatar, background, 
         logo_github, logo_linkedin, logo_powerbi, logo_tableau, logo_twitter, 
         logoblue_github, logoblue_linkedin, logoblue_powerbi, logoblue_tableau, logoblue_twitter 
       } from '../data/assets';
import { displayName, bannerDescription, githubURL, tableauURL, twitterURL } from '../data/data';

export default function Banner() {

    return (
        <div className='banner'>
            <div className='banner-navigation'>
                <center>
                    <div className='banner-elements'>

                        <img src={ avatar } class='banner-avatar'/>

                            <ul className="banner-button-list">
                                <li>
                                    <a href={ githubURL } target="_blank">
                                        <span className="banner-icon">
                                            <img src={ logoblue_github } />
                                            <img src={ logo_github } />
                                        </span>
                                        <span className="banner-label">GitHub</span>
                                    </a>
                                </li>
                                <li>
                                    <a href={ twitterURL } target="_blank">
                                        <span className="banner-icon">
                                            <img src={ logoblue_powerbi } />
                                            <img src={ logo_powerbi } />
                                        </span>
                                        <span className="banner-label">Power BI</span>
                                    </a>
                                </li>
                                <li>
                                    <a href={ tableauURL } target="_blank">
                                        <span className="banner-icon">
                                            <img src={ logoblue_tableau } />
                                            <img src={ logo_tableau } />
                                        </span>
                                        <span className="banner-label">Tableau</span>
                                    </a>
                                </li>
                                <li>
                                    <a href={ twitterURL } target="_blank">
                                        <span className="banner-icon">
                                            <img src={ logoblue_twitter } />
                                            <img src={ logo_twitter } />
                                        </span>
                                        <span className="banner-label">Twitter</span>
                                    </a>
                                </li>
                                <li>
                                    <a href={ twitterURL } target="_blank">
                                        <span className="banner-icon">
                                            <img src={ logoblue_linkedin } />
                                            <img src={ logo_linkedin } />
                                        </span>
                                        <span className="banner-label">LinkedIn</span>
                                    </a>
                                </li>
                            </ul>

                    </div>
                </center>
                <video class='banner-video' autoPlay loop muted width>
                    <source src={ background } type='video/mp4'/>
                </video>
            </div>
        </div>
    )
  }
