// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import { HashRouter as Router, Route } from 'react-router-dom'
import './index.css'

const log = require('electron-log')
log.warn('[Render]: index')

const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.render(
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </div>
    </Router>,
    root
  )
}
