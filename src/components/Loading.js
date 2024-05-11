import React from 'react';

const Loading = ({ loading, progress }) => {
  return loading ? (
    <div className="loading-screen">
      <div className="loading-percentage">{`${progress}%`}</div>
      <div className="loading-bar">
        <div className="loading-progress" style={{ width: `${progress}%` }}></div>
      </div>

    </div>
  ) : null;
}

export default Loading;