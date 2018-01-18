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

const API = () => (
  <div>
    <div className="hero">
        <h1>APIs and Prizes</h1>
    </div>
    <div style={{backgroundColor: "rgb(228, 228, 228)"}}>
      <div className="tech-content">
        <div className="container api-container">
          <div className="row justify-content-around">
            {Object.values(apiList).map((v, i) => {
              return (
                <div key={i} className="col-lg-4 col-md-6">
                  <SponsorCard title={v.title} text={v.text} href={v.href} prize={v.prize}/>
                </div>);
            })}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default API
