import React from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import PostPreviews from './PostPreviews';

import { useRef } from "react";
import { useClickRipple } from '../assets-style/useClickRipple';

function Blog() {

    const screenRef = useRef();

    /* Reminder: 2nd argument to useClickRipple is optional, can just be {} */
    useClickRipple(screenRef,{duration: 800});

    return (
        <div className='container' ref={screenRef}>
       
            <div className="interface">
                <Header mp3credit='♪♪♪ Now playing: Small Discoveries by Evgeny_Bardyuzha @ pixabay.com' mp3='https://github.com/datamesse/datamesse.github.io/raw/main/src/assets-theme/music-evgeny-bardyuzha-small-discoveries.mp3' />
                <PostPreviews />
                <Footer />
            </div>

            <div className="bg-beige">
                <div className="bg-beige-tiles">
                    <center>
                        <div className='gear-beige-1 gear-1-spin'></div>
                        <div className='gear-beige-2 gear-2-spin'></div>
                    </center>
                </div>
            </div>

        </div>
    )
}

export default Blog;