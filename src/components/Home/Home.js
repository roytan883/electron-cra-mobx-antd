import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import './Home.css'

const isDev = require('electron-is-dev')

const Home = props => (
  <div>
    <Header headerText='Home' />
    <div>{"process.type = " + process.type}</div>
    <div>{"isDev = " + isDev}</div>
    <h1>Hello World!</h1>
    We are using Node.js {process.versions.node},
    Chromium {process.versions.chrome},
    and Electron {process.versions.electron}.
    <div className='link-container'>
      <Link
        className='link'
        to='/about' >
        Go to About
        </Link>
    </div>
  </div>
)

export default Home
