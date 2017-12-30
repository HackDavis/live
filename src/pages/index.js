import React from 'react'
import Link from 'gatsby-link'
import Countdown from '../components/countdown.js'
import Schedule from '../components/schedule.js'
import {Timeline} from 'react-twitter-widgets'
import Knob from 'react-time-knob'

class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      minutes: 0,
      hours: 0,
      seconds: 0,
      end: new Date("2018-01-21T20:20:00-07:00").getTime()
    }
  }
  render(){
    return (
      <div className="container-fluid" style={{paddingTop: "15px"}}>
        <div className="large-container row">
          <div className="col-lg-3 col-md-4 d-flex justify-content-center align-items-start px-3">
            <div ref={(e) => {if(e) this.circleWidth = e.clientWidth - parseInt(window.getComputedStyle(e).getPropertyValue("padding-left")) - parseInt(window.getComputedStyle(e).getPropertyValue('padding-left'))}}
            className="knob">
              <Knob lineCap='round' 
              sColor="#55419c" 
              mColor="#945ebe"
              hColor="#b766ad" 
              width={this.circleWidth} 
              height={this.circleWidth} 
              hours={this.state.hours} 
              minutes={this.state.minutes} 
              seconds={this.state.seconds} 
              displayNumber={window.innerWidth < 768} 
              thickness={5} />
            </div>
          </div>
          <div className="col-md-8 col-lg-5 countdown-container">
            <Countdown hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds}/>
          </div>
          <div className="col-md-4 offset-md-3 offset-lg-0 px-4">
            <div style={{marginTop: "10px", maxWidth: "600px"}}>
              <Timeline dataSource={{sourceType: 'profile', screenName: 'hack_davis'}} options={{height: "600px"}}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
clock() {
    var now = new Date().getTime();
    var difference = this.state.end - now;
    if(difference < 0) difference = 0;
    difference = Math.floor(difference / 1000);
    var seconds = difference % 60;
    var minutes = Math.floor(difference / 60 % 60);
    var hours = Math.floor(difference / 60 / 60);
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

export default IndexPage
