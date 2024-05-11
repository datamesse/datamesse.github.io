import React, { useEffect, useState } from 'react';
import './App.css';
import assets from './data/assets'; // Import assets from assets.js

const LoadingPage = ({ onFinishLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const simulateAssetLoading = () => {
      let totalAssets = 0;
      let loadedAssets = 0;

      const onLoad = () => {
        loadedAssets++;
        setProgress((loadedAssets / totalAssets) * 100);
      };

      totalAssets = Object.keys(assets).length; // Get the total number of assets

      Object.values(assets).forEach(asset => {
        if (typeof asset === 'string') {
          const img = new Image();
          img.onload = onLoad;
          img.src = asset;
        } else if (typeof asset === 'object' && asset.type === 'audio') {
          // Handle audio files if needed
        }
      });

      const loadingTimer = setTimeout(() => {
        onFinishLoading();
        clearTimeout(loadingTimer);
      }, 3000); // Wait 3 seconds before redirecting

      return () => clearTimeout(loadingTimer);
    };

    simulateAssetLoading();
  }, [onFinishLoading]);

  return (
    <div className="loading-container">
      <div className="loading-logo-container"></div>
      <div className="loading-progress-container">
        <div className="loading-progress-bar" style={{ width: `${progress}%` }}>
          LIVE SYSTEM: {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;