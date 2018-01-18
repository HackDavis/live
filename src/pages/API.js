import React from 'react'
import apiList from '../json/api.json'
import './API.css'
import './tech.css'

const SponsorCard = (props) => (
  <div className="card">
    <div className="card-header">
      <h1 className="card-title">{props.title}</h1>
    </div>
    <img src={props.image} className="card-circle" />
    <div className="card-body">
      <p>{props.text}</p>
      <a href={props.href}>{props.href}</a>
      {(props.prize) ? (<p><i className="fa fa-trophy" aria-hidden="true" />{props.prize}</p>) : null}
    </div>
  </div>
);

const TopThree = (props) => (
  <div className="col-md-4" style={{textAlign: "center"}}>
    <i className={"fa " + props.icon}></i>
    <h1>{props.title}</h1>
    <p>{props.text}</p>
  </div>
)

const API = () => (
  <div>
    <div className="hero">
        <h1>APIs and Prizes</h1>
    </div>
    <div className="container api-container">
      <div className="row">
        {Object.values(apiList).map((v, i) => {
          return (
            <div key={i} className="col-lg-4 col-md-6">
              <SponsorCard title={v.title} text={v.text} href={v.href} prize={v.prize}/>
            </div>);
        })}
      </div>
    </div>
    <div className="top3">
      <div className="container">
        <div className="row justify-content-center">
          <TopThree icon="fa-medkit" title="Best Health Hack" text="Centene sponsored prize."/>
          <TopThree icon="fa-book" title="Best Education Hack" text="4 Audio-technicas"/>
          <TopThree icon="fa-globe" title="Best Environment Hack" text="4 Amazon Echos"/>
        </div>
      </div>
    </div>
  </div>
)

export default API
