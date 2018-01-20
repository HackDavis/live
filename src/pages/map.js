import React from 'react';
import mappic from './mapzoom.jpg';

var divStyle = {
  height: 'auto',
  width: 'auto',
};

const MAP = () => (
  <div className="container">
    <div style={divStyle}>
      <a href={mappic} target="_blank">
        <img id="mymap" src={mappic} />
      </a>
    </div>
  </div>
);

export default MAP;
