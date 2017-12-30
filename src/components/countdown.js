import React from 'react'
import './countdown.css'

const Countdown = (props) => {
    function filter(number) {
        if(number == 0) return '00';
        else if(number < 10) return '0' + number;
        else return number + "";
    }
    return (
        <div>
            <h1 style={{textAlign: "center", color: "#55419c"}}>HackDavis ends in: </h1>
            <div className="countdown">
                <div className="block">
                    <p className="digit">{ filter(props.hours) }</p>
                    <p className="text">Hours</p>
                </div>
                <div className="block">
                    <p className="digit">{ filter(props.minutes) }</p>
                    <p className="text">Minutes</p>
                </div>
                <div className="block">
                    <p className="digit">{ filter(props.seconds) }</p>
                    <p className="text">Seconds</p>
                </div>
            </div>
        </div>
    )
}

export default Countdown