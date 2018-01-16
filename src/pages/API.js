import React from 'react'
import apiList from '../json/api.json'
import './API.css'
import './tech.css'

const SponsorCard = (props) => (
  <div className="card">
    <div className="card-header">
      <h1 className="card-title">{props.title}</h1>
    </div>
    <div className="card-circle">
    </div>
    <div className="card-body">
      <p>{props.text}</p>
    </div>
  </div>
);

const API = () => (
  <div>
    <div className="hero">
        <h1>Checkout Hardware from MLH Labs</h1>
        <a href="http://hardware.mlh.io"><button className="round-button white-button">Register</button></a>
    </div>
    <div className="container api-container">
      <h1>API</h1>
      {Object.values(apiList).map((v, i) => {
        return (<SponsorCard key={i} title={v.title} text={v.text} />);
      })}
    </div>
  </div>
)

export default API
