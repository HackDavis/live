import React from 'react';
import apiList from '../json/api.json';
import './API.css';
import './tech.css';

const SponsorCard = props => (
  <div className="card">
    <div className="card-header">
      <h1 className="card-title">{props.title}</h1>
    </div>
    <img src={props.image} className="card-circle" />
    <div className="card-body">
      {props.text
        ? props.text.map((element, i) => {
          return <p key={i}>{element}</p>;
        })
        : null}
      <a href={props.href}>{props.href}</a>
      {props.prize ? (
        <p>
          <i className="fa fa-trophy" aria-hidden="true" />
          {props.prize}
        </p>
      ) : null}
    </div>
  </div>
);

const TopThree = props => (
  <div className="col-md-4" style={{ textAlign: 'center' }}>
    <i className={'fa ' + props.icon} />
    <h1>{props.title}</h1>
    <p>{props.text}</p>
  </div>
);

const API = () => (
  <div className="api-container">
    <div className="hero">
      <h1>APIs and Prizes</h1>
      <div>
        <div className="top3 container">
          <div className="row justify-content-center">
            <TopThree
              icon="fa-medkit"
              title="Best Health Hack"
              text="$200 American Express gift card for each participant, sponsored by Centene."
            />
            <TopThree
              icon="fa-book"
              title="Best Education Hack"
              text="Audio-Technica ATH-M40x Professional Monitor Headphone per participant."
            />
            <TopThree
              icon="fa-globe"
              title="Best Environment Hack"
              text="Holy Stone HS160 Shadow FPV RC Drone for each participant."
            />
          </div>
        </div>
      </div>
      <p>For a full list, see <a target="_blank" href="https://hackdavis2018.devpost.com">Devpost</a></p>
    </div>

    <div className="container api-card-container">
      <div className="row">
        {Object.values(apiList).map((v, i) => {
          return (
            <div key={i} className="col-lg-4 col-md-6">
              <SponsorCard
                title={v.title}
                text={v.text}
                href={v.href}
                prize={v.prize}
              />
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default API;
