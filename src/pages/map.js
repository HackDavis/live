import React from 'react'
import mappic from './mapzoom.jpg'

var divStyle = {
    height: 'auto',
    width: 'auto',
    height: 'calc(100vh - 100px)'
};

const MAP = () => (
<div className="container">
  <div style={divStyle}>
    <a href={"http://getschedulehelper.com/hackdavis/mapzoom.jpg"} target={"_blank"}><img id={"mymap"} src={mappic}/></a>
  </div>
</div>

)

export default MAP


