import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class LoginBot extends Component {

  render() {
    return (
      <div className="trc-row">
          <h1 className="title">Login bot Display</h1>
          <form className="trc-form">
            <label> Enter Token</label> <br/>          
            <input className="trc-input-field" type="text" id="fname" name="fname"/>            
            <button className="trc-go-button">Submit</button>
          </form>
      </div>
    );
  }
}