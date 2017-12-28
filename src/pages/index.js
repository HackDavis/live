import React from 'react'
import Link from 'gatsby-link'
import Countdown from '../components/countdown.js'
import Schedule from '../components/schedule.js'
import {Timeline} from 'react-twitter-widgets'

const IndexPage = () => (
  <div>
    <Countdown end="2018-01-21T20:20:00-07:00"/>
    <div style={{maxWidth: "500px"}}>
      <Timeline dataSource={{sourceType: 'profile', screenName: 'hack_davis'}} options={{height: "600px"}}/>
    </div>
  </div>
)

export default IndexPage
