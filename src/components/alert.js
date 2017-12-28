import React from 'react'

const Alert = (props) => (
    <div style={{textAlign: 'center'}} className={"alert " + (props.important ? 'alert-danger' : 'alert-primary')} style={{width: "100%"}}>
        {props.text}
    </div>
)

export default Alert