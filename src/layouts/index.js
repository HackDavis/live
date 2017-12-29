import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Alert from '../components/alert.js'

import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'
import './nav.css'

const Header = () => {
  function passClick(e) {
    if(e.target.tagName == "DIV") e.target.children[0].click();
  }
  return (
  <nav id="nav" className="navbar navbar-expand-md justify-content-between">
    <h1 id="nav-title" className="navbar-brand"><Link to="/">HACK<strong style={{fontFamily: 'FuturaStd-Heavy'}}>DAVIS</strong> LIVE</Link></h1>
    <div className="navbar-nav justify-content-center">
      <div className="nav-item" onClick={passClick}> <Link to="/map" className="nav-link"> Map </Link> </div>
      <div className="nav-item" onClick={passClick}> <Link to="/API" className="nav-link"> API </Link> </div>
      <div className="nav-item" onClick={passClick}> <Link to="/hardware" className="nav-link"> Hardware </Link> </div>
      <div className="nav-item" onClick={passClick}> <Link to="/prizes" className="nav-link"> Prizes </Link> </div>
      <div className="nav-item" onClick={passClick}> <a href="http://help.hackdavis.io" className="nav-link"> Help Queue </a> </div>
      <div className="nav-item" onClick={passClick}> <a href="http://devpost.com" className="nav-link"> Devpost </a> </div>
    </div>
  </nav>
  ) 
}

class TemplateWrapper extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      children: props.children,
    }
    this.checkGist = this.checkGist.bind(this);
  }
  checkGist() {
    fetch("https://jsonblob.com/api/3a53ec9b-ec40-11e7-becf-130bb7cd4851", {cache: 'reload'}).then((response) => {
      response.json().then((alert) => {
        console.log(alert)
        this.setState({
          children: this.state.children,
          alert: alert
        })
      });
    }, (error) => {
      console.error(error);
    });
  }
  componentDidMount() {
    if(!this.timer) this.timer = setInterval(this.checkGist, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }
  render() {
    return (
      <div>
        <Helmet
          title="HackDavis Live 2018"
          meta={[
            { name: 'description', content: 'HackDavis is happening now!' },
            { name: 'keywords', content: 'hackathon, davis' },
          ]}
        />
        <Header />
        { this.state.alert && this.state.alert.text !== "" ? <Alert text={this.state.alert.text} important={this.state.alert.important}/> : null}
        <div
          className="container-fluid"
          style={{
            margin: '0 auto',
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: "15px",
          }}
        >
          {this.state.children()}
        </div>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
