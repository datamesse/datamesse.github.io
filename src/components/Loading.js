import React from 'react';

const Loading = ({ progress }) => {
  return (
    <div className="loading-screen">
      <div className="loading-bar">
        <div className="loading-progress" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="loading-percentage">{`${progress}%`}</div>
    </div>
  );
}

export default Loading;