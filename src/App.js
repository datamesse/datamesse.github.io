// App.js
import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import preloadAssets from './assets'; // Import the function to preload assets

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAssets = () => {
      preloadAssets();
      // Simulating delay for demonstration purposes
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    loadAssets();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading-screen">
          <div className="loading-bar">
            <div className="progress"></div>
          </div>
        </div>
      ) : (
        <FadeOut>
          <Home />
        </FadeOut>
      )}
    </div>
  );
};

const FadeOut = ({ children }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
    }, 1000);
  }, []);

  return (
    <div className={`fade-out ${fadeOut ? 'fade-out-active' : ''}`}>
      {children}
    </div>
  );
};

export default App;