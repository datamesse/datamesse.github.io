import React, { useState } from 'react';
import '../App.css';
import { title_c, title_d, title_e } from '../data/assets';
import Music from './Music';

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
                    <p>{mp3credit}</p>
                    <Music audioFile={mp3} />
                </div>

            </div>
        </>
    )

}

export default Header;