import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { observable } from "mobx";
import { observer } from "mobx-react";

import Header from '../Header/Header'
import './Home.css'

const isDev = require('electron-is-dev')

@observer
export default class Home extends Component {
  constructor() {
    super()
    setInterval(() => {
      this.timeNow = `${Date.now()}`
    }, 1000);
  }

  @observable timeNow = `${Date.now()}`

  render() {
    return (
      <div>
        <Header headerText='Home' />
        <div>{"process.type = " + process.type}</div>
        <div>{"isDev = " + isDev}</div>
        <div>{"timeNow = " + this.timeNow}</div>
        <h1>Hello World!</h1>
        We are using Node.js {process.versions.node}, Chromium {process.versions.chrome}, and Electron {process.versions.electron}.
        <div className='link-container'>
          <Link
            className='link'
            to='/about' >
            Go to About
        </Link>
        </div>
      </div>
    );
  }
}


