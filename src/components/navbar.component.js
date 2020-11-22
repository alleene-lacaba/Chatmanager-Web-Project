import React, { Component } from 'react';
import logo from '../logo.png';
import SexyMenu from '../sexy-menu.png';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
       <div className="trc-top-nav">
           <img src={logo} className="nav-logo" id="nav-bar-logo" alt="logo" />
           <h1 className="trc-brandname">Welcome to Chatmanager Backend</h1>
           <img src={SexyMenu} className="nav-logo" id="nav-bar-menu" alt="logo" />
       </div>
      
    );
  }
}