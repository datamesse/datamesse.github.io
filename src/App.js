import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import preloadAssets from './data/assets';
import Loading from './Loading';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadAssets = () => {
      preloadAssets();
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 10; // Increase progress by 10% in each interval
        setProgress(currentProgress);
        if (currentProgress >= 100) {
          clearInterval(interval);
          setLoading(false); // Hide loading screen when progress reaches 100%
        }
      }, 200); // Adjust the interval timing as needed
    };

    loadAssets();
  }, []);

  return (
    <div>
      <Loading loading={loading} progress={progress} />
      {!loading && <FadeOut><Home /></FadeOut>}
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
