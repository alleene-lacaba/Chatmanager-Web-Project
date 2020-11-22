import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class SetBotStatus extends Component {

  render() {
    return (
      <div className="trc-row">
          <h1 className="title">Set Bot Status Display</h1>
          <form className="trc-form">
            <label> Enter Status</label> <br/>          
            <input className="trc-input-field" type="text" id="fname" name="fname" placeholder="idle | online | offline"/>            
            <button className="trc-go-button">Submit</button>
          </form>
      </div>
    );
  }
}