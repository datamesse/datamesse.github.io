import React from 'react';
import '../App.css';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import { useRef } from "react";
import { useClickRipple } from '../assets-style/useClickRipple';

function Home() {

    const screenRef = useRef();

    /* Reminder: 2nd argument to useClickRipple is optional, can just be {} or {duration: 800} */
    useClickRipple(screenRef,{});

    return (

        <div className='container' ref={screenRef}>

            <div className="interface">

                <Header mp3credit='♪♪♪ Now playing: Good Mood For No Reason by Evgeny_Bardyuzha @ pixabay.com' mp3='https://github.com/datamesse/datamesse.github.io/raw/main/src/assets-theme/music-evgeny-bardyuzha-good-mood-for-no-reason.mp3' />
                <About />
                <Footer />

            </div>

            <div className="bg-home">

                <div className='bg-home-dots'></div>

            </div>

        </div>

    );
}







export default Home;