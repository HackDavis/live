import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Alert from '../components/alert.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
  //if(typeof window !== 'undefined'){ require('bootstrap/dist/js/bootstrap.min.js') }
import Collapse from '../vendor/collapse';
if( typeof window !== `undefined` ) Collapse($);

import './index.css'
import './nav.css'

const Header = () => {
  function collapseNav() {
    $("#navbarSupportedContent").collapse('hide');
  }
  return (
  <nav id="nav" className="navbar navbar-expand-lg navbar-dark justify-content-between">
    <h1 id="nav-title" className="navbar-brand"><Link onClick={collapseNav} to="/">HACK<strong style={{fontFamily: 'FuturaStd-Heavy'}}>DAVIS</strong> LIVE</Link></h1>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <div className="navbar-nav justify-content-center">
        <Link exact to="/" onClick={collapseNav} activeClassName="active" className="nav-item nav-link"> Home </Link>
        <Link exact to="/API" onClick={collapseNav} activeClassName="active" className="nav-item nav-link"> API </Link>
        <Link exact to="/hardware"onClick={collapseNav}  activeClassName="active" className="nav-item nav-link"> Hardware </Link>
        <a target="_blank" href="http://help.hackdavis.io" className="nav-item nav-link"> Help Queue </a>
        <a target="_blank" href="http://devpost.com" className="nav-item nav-link"> Devpost </a>
      </div>
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
    fetch("http://getschedulehelper.com/alerts.json", {cache: 'reload'}).then((response) => {
      console.log(response)
      response.json().then((alert) => {
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
          style={{
            margin: '0 auto',
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
