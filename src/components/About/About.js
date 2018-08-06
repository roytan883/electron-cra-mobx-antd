// @flow

import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header/Header'
import './About.css'

type Props = {}

const About = (props: Props) => {
  return (
    <div>
      <Header headerText='About' />
      <div className='link-container'>
        <Link
          className='link'
          to='/' >
          Go to Home
        </Link>
      </div>
    </div>
  )
}

export default About
