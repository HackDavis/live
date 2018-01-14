import React from 'react'
import apiList from '../json/api.json'
import './API.css'

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
  <div className="container api-container">
    <h1>API</h1>
    {Object.values(apiList).map(v => {
      return (<SponsorCard title={v.title} text={v.text} />);
    })}
  </div>
)

export default API
