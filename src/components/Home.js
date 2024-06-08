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

    // Function to create and animate the squares
    const createSquare = () => {
      const square = document.createElement('div');
      square.className = 'bg-home-square';

      // Calculate random position within visible area
      const startPosX = Math.random() * (window.innerWidth - 100); // Adjust as needed
      const startPosY = Math.random() * (window.innerHeight - 100); // Adjust as needed

      square.style.left = startPosX + 'px';
      square.style.bottom = startPosY + 'px'; // Adjust to top if using 'top'

      // Rest of your animation styles
      const riseDuration = Math.random() * (25 - 10) + 10;
      const spinAnimation = `square-spin${Math.floor(Math.random() * 3) + 1}`;
      square.style.animation = `square-rise ${riseDuration}s linear forwards, square-sway 5s ease-in-out infinite, ${spinAnimation} ${riseDuration}s linear infinite`;

      document.querySelector('.container').appendChild(square);

      setTimeout(() => {
        square.remove();
      }, riseDuration * 1000); // Remove after square-rise animation completes
    };

    // Function to generate a wave of squares
    const generateWave = () => {
      const numSquares = Math.floor(Math.random() * 8) + 1;
      for (let i = 0; i < numSquares; i++) {
        setTimeout(createSquare, i * 500); // Ensure squares do not start simultaneously
      }
    };

    // Start the wave initially and repeat every 30 seconds
    const startWave = () => {
      generateWave();
      setInterval(generateWave, 15000); // 30 seconds for the wave + 15 seconds wait
    };

    startWave(); // Start the wave animation

    // Clean up function (optional, for unmounting or cleaning up)
    return () => {
      clearInterval(startWave);
    };

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
        <div className="bg-home-background"></div>
      </div>
    </div>
  );
}

export default Home;