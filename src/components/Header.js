import React, { useState } from 'react';
import '../App.css';
import assets from '../data/assets';
import Music from './Music';

const { title_c, title_d, title_e } = assets;

function Header({mp3credit, mp3}) {

    return (
        <>
            <div className="bg-header">
      
                <div className="sitename">
                    <a href='/'>
                        <img className="site-title" src={ title_e } />
                        <img className="site-title" src={ title_d } />
                        <img className="site-title" src={ title_c } />
                    </a>
                </div>

                <div className='mp3-player'>
                    <div class='mp3-bars'>
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <p>{mp3credit}</p>
                    <Music audioFile={mp3} />
                </div>

            </div>
        </>
    )

}

export default Header;