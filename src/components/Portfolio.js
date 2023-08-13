import React from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import ProjectPreviews from './ProjectPreviews';

import { useRef } from "react";
import { useClickRipple } from '../assets-style/useClickRipple';

function Portfolio() {

    const screenRef = useRef();

    /* Reminder: 2nd argument to useClickRipple is optional, can just be {} */
    useClickRipple(screenRef,{duration: 800});

    return (
        <div className='container page' ref={screenRef}>
        
            <div className="interface">
                <Header mp3credit='♪♪♪ Now playing: Time Flows by Evgeny_Bardyuzha @ pixabay.com' mp3='https://github.com/datamesse/datamesse.github.io/raw/main/src/assets-theme/music-evgeny-bardyuzha-time-flows.mp3' />
                <ProjectPreviews />
                <Footer />
            </div>

            <div className="bg-blue">
                <div lassName="bg-blue-map">
                    <div className="bg-blue-tiles">
                        <center>
                            <div className='gear-blue-1 gear-1-spin'></div>
                            <div className='gear-blue-2 gear-2-spin'></div>
                        </center>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Portfolio;