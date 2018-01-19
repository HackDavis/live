import React from 'react';

const Alert = (props) => (
  <div style={{textAlign: 'center', width: "100%"}} className={"alert " + (props.important ? 'alert-danger' : 'alert-primary')}>
    {props.text}
  </div>
);

export default Alert;