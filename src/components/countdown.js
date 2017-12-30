import React from 'react'
import './countdown.css'
import Knob from 'react-time-knob'

class Countdown extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            minutes: "00",
            hours: "00",
            seconds: "00",
            end: new Date(props.end).getTime()
        }

    }
    
    render() {
        return (
            <div className="large-container row">
                <div ref={(e) => {if(e) this.circleWidth = e.clientWidth - parseInt(window.getComputedStyle(e).getPropertyValue("padding-left")) - parseInt(window.getComputedStyle(e).getPropertyValue('padding-left'))}} className="col-lg-2 d-flex align-items-end m-r-2">
                    <Knob lineCap='round' sColor="#55419c" mColor="#945ebe" hColor="#b766ad" width={this.circleWidth} height={this.circleWidth} hours={Number(this.state.hours)} minutes={Number(this.state.minutes)} seconds={Number(this.state.seconds)} displayNumber={false} thickness={5} className="m-b-2"/>
                </div>
                <div className="col-lg-6">
                    <h1 style={{textAlign: "center", color: "#55419c"}}>HackDavis ends in: </h1>
                    <div className="countdown">
                        <div className="block">
                            <p className="digit">{ this.state.hours }</p>
                            <p className="text">Hours</p>
                        </div>
                        <div className="block">
                            <p className="digit">{ this.state.minutes }</p>
                            <p className="text">Minutes</p>
                        </div>
                        <div className="block">
                            <p className="digit">{ this.state.seconds }</p>
                            <p className="text">Seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    filter(number) {
        if(number == 0) return '00';
        else if(number < 10) return '0' + number;
        else return number + "";
    }
    clock() {
        var now = new Date().getTime();
        var difference = this.state.end - now;
        if(difference < 0) difference = 0;
        difference = Math.floor(difference / 1000);
        var seconds = difference % 60;
        var minutes = Math.floor(difference / 60 % 60);
        var hours = Math.floor(difference / 60 / 60);

        seconds = this.filter(seconds)
        minutes = this.filter(minutes)
        hours = this.filter(hours)

        this.setState({
            seconds: seconds,
            hours: hours,
            minutes: minutes,
            end: this.state.end
        });
    }
    componentDidMount() {
        this.clock();
        this.timer = setInterval(function(){
            this.clock();
        }.bind(this), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }
}

export default Countdown