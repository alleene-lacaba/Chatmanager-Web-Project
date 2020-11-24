import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default class ResToM extends Component {
  constructor(props) {
    super(props);
    //this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      token: "Nzc1NzUyODYyNzc2MTY0NDUz.X6q6Jw.j3XxrZ7cS0-kl0ETMR4q3XyatWk",
      
    };
  }

  componentDidMount(){
    
  }

  handleClick() {
    //console.log("bot is ready");
    //bot.channels.fetch('764039626368614420')
    //.then(channel => channel.send("hello from web app"));
    axios.get('http://localhost:5000/chatbots/respond-to-message')
    .then(res => console.log("sucess"));
    
  }

  render() {
    return (
      <div className="trc-row">
          <h1 className="title">Login bot Display</h1>
          <form className="trc-form">
            <label> Enter Message</label> <br/>          
            <input className="trc-input-field" type="text" id="fname" name="fname"/>            
            <button className="trc-go-button">Submit</button>
          </form>
          <button className="trc-go-button" onClick={this.handleClick}>Login Bot</button>
      </div>
    );
  }
}

