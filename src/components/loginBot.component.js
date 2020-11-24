import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default class LoginBot extends Component {
  constructor(props) {
    super(props);
    //this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLoginBot = this.handleLoginBot.bind(this);
    this.state = {
      token: "Nzc1NzUyODYyNzc2MTY0NDUz.X6q6Jw.j3XxrZ7cS0-kl0ETMR4q3XyatWk",
      
    };
  }

  componentDidMount(){
    
  }

  handleLoginBot() {
    //console.log("bot is ready");
    //bot.channels.fetch('764039626368614420')
    //.then(channel => channel.send("hello from web app"));
    axios.get('http://localhost:5000/chatbots/loginbot')
    .then(response => { console.log(response.data)});
    
  }

  render() {
    return (
      <div className="trc-row">
          <h1 className="title">Login bot Display</h1>
          <form className="trc-form">
            <label> Enter Token</label> <br/>          
            <input className="trc-input-field" type="text" id="fname" name="fname"/>            
            <button className="trc-go-button">Submit</button>
          </form>
          <button className="trc-go-button" onClick={this.handleLoginBot}>Login Bot</button>
      </div>
    );
  }
}

