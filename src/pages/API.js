import React from 'react'
import apiList from '../json/api.json'
import './API.css'
import './tech.css'
import image from './mapzoom.jpg'

const SponsorCard = (props) => (
  <div className="card">
    <div className="card-header">
      <h1 className="card-title">{props.title}</h1>
    </div>
    <img src={image} className="card-circle" />
    <div className="card-body">
      <p>ALLALALALALALALALLALALALLAHUAKBARRRRRRRRRRRRRRRRR</p>
    </div>
  </div>
);

const API = () => (
  <div>
    <div className="hero">
        <h1>APIs and Prizes</h1>
    </div>
    <div className="container api-container">
      <div className="row justify-content-around">
        {Object.values(apiList).map((v, i) => {
          return (
            <div key={i} className="col-lg-4 col-md-6">
              <SponsorCard title={v.title} text={v.text} />
            </div>);
        })}
      </div>
    </div>
  </div>
)

export default API
