import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { avatar, background, 
         logo_github, logo_linkedin, logo_powerbi, logo_tableau, logo_twitter, 
         logoblue_github, logoblue_linkedin, logoblue_powerbi, logoblue_tableau, logoblue_twitter 
       } from '../data/assets'
import { displayName, bannerDescription, githubURL, tableauURL, twitterURL } from '../data/data'

export default function Banner() {
    return (
        <div className='banner'>
            <div className='banner-navigation'>
                <center>
                    <div className='banner-title'>
                        <h4>{ displayName }</h4>
                        <p>{ bannerDescription }</p>
                    </div>
                    <div className='menu-overlay'>
                        <ul>  
                            <li>
                                <Link to='/'>PROJECTS</Link>
                            </li>
                            <li>
                                <Link to='/blog'>BLOG</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='banner-elements'>
                        <img src={ avatar } class='banner-avatar'/>
                            <ul className='banner-button-list'>
                                <li>
                                    <a href={ githubURL } target='_blank'>
                                        <span className='banner-icon'>
                                            <img src={ logoblue_github } />
                                            <img src={ logo_github } />
                                        </span>
                                        <span className='banner-label'>GitHub</span>
                                    </a>
                                </li>
                                <li>
                                    <a href={ tableauURL } target='_blank'>
                                        <span className='banner-icon'>
                                            <img src={ logoblue_tableau } />
                                            <img src={ logo_tableau } />
                                        </span>
                                        <span className='banner-label'>Tableau</span>
                                    </a>
                                </li>
                                <li>
                                    <a href={ twitterURL } target='_blank'>
                                        <span className='banner-icon'>
                                            <img src={ logoblue_twitter } />
                                            <img src={ logo_twitter } />
                                        </span>
                                        <span className='banner-label'>Twitter</span>
                                    </a>
                                </li>
                            </ul>
                    </div>
                </center>
                <video class='banner-video' autoPlay loop muted playsinline width>
                    <source src={ background } type='video/mp4'/>
                </video>
            </div>
        </div>
    )
}