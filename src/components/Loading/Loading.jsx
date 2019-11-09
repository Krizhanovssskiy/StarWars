import './style.scss';

import React from 'react';

const Loading = () => {
  return (
    <div className="Loading">
      <div className="Loading__box">
        <div className="Loading__outside" />
        <div className="Loading__internal" />
      </div>
    </div>
  )
};

export default Loading;
