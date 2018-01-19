import React from 'react';
import Link from 'gatsby-link';
import Countdown from '../components/countdown.js';
import Schedule from '../components/schedule.js';
import {Timeline} from 'react-twitter-widgets';
import Knob from 'react-time-knob';
import './main.css';

class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      minutes: 0,
      hours: 0,
      seconds: 0,
      end: new Date("2018-01-21T12:00:00-07:00").getTime()
    };
  }
  render(){
    const timelineHeight = 800;
    return (
      <div className="container index-container" style={{paddingTop: "15px"}}>
        <div className="end-container">
          <h1 style={{textAlign: "center", color: "#55419c"}}>HackDavis ends in: </h1>
        </div>
        <div ref={(e) => {if(e && typeof window !== `undefined`) this.circleWidth = e.clientWidth - parseInt(window.getComputedStyle(e).getPropertyValue("padding-left")) - parseInt(window.getComputedStyle(e).getPropertyValue('padding-left'));}}
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
            displayNumber={typeof window !== `undefined` ? window.innerWidth < 768 : false}
            thickness={5} />
        </div>
        <div className="countdown-container">
          <Countdown hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds}/>
        </div>
        <div className="timeline-container">
          <Timeline dataSource={{sourceType: 'profile', screenName: 'hack_davis'}} options={{height: timelineHeight}}/>
        </div>
        <div className="schedule-container">
          <Schedule data={this.props.data}/>
        </div>
      </div>
    );
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
    }.bind(this), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }
}

export default IndexPage;
export const pageQuery = graphql`
query index{
  allMarkdownRemark (filter:{frontmatter:{link:{eq: "Schedule"}}} sort:{fields:[frontmatter___start, frontmatter___end] ,order:ASC}){
    edges{
      node{
        frontmatter{
          title
          category
          start
          end
          host
        }
        html
      }
    }
  }
}`;
