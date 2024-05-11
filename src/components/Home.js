import React from 'react';
import '../App.css';
import Header from './Header';
import About from './About';
import Awards from './Awards';
import Footer from './Footer';
import assets from '../data/assets';

import { useRef } from "react";
import { useClickRipple } from '../assets-style/useClickRipple';

const { music_home } = assets;

function Home() {

    const screenRef = useRef();

    /* Reminder: 2nd argument to useClickRipple is optional, can just be {} or {duration: 800} */
    useClickRipple(screenRef,{});

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

                <div className='bg-home-dots'></div>

            </div>

        </div>

    );
}

export default Home;