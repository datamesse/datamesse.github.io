import React, { useEffect, useRef } from 'react';
import '../App.css';
import Header from './Header';
import About from './About';
import Awards from './Awards';
import Footer from './Footer';
import { music_home } from '../data/assets';
import { useClickRipple } from '../assets-style/useClickRipple';

function Home() {

    const screenRef = useRef();

    /* Reminder: 2nd argument to useClickRipple is optional, can just be {} or {duration: 800} */
    useClickRipple(screenRef, {});

    useEffect(() => {
        const linesContainer = document.getElementById('bg-home-lines-container');
        const numberOfLines = 500;

        if (linesContainer) {
            for (let i = -Math.floor(numberOfLines / 2); i <= Math.floor(numberOfLines / 2); i++) {
                const line = document.createElement('div');
                line.className = 'bg-home-line';
                line.style.setProperty('--i', i);
                linesContainer.appendChild(line);
            }
        }
    }, []);

    return (
        <div className='container page' ref={screenRef}>
            <div className="interface">
                <Header mp3credit='♪♪♪ Now playing: Good Mood For No Reason by Evgeny_Bardyuzha @ pixabay.com' mp3={music_home} />
                <About />
                <br /><br />
                <Awards />
                <br /><br /><br /><br /><br /><br />
                <Footer />
            </div>
            <div className="bg-home">
                <div className="bg-home-map-1"></div>
                <div className="bg-home-map-2"></div>
                <div className="bg-home-lines-container" id="bg-home-lines-container"></div>
            </div>
        </div>
    );
}

export default Home;
