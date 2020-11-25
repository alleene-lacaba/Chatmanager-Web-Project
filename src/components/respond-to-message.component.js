import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default class ResToM extends Component {
  constructor(props) {
    super(props);
    //this.handleLoginClick = this.handleLoginClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.state = {
      message: ""
    };
  }

  componentDidMount(){
    
  }

  onChangeMessage(e){
    this.setState({
      message: e.target.value
    })
  }

  onSubmit() {
    //console.log("bot is ready");
    //bot.channels.fetch('764039626368614420')
    //.then(channel => channel.send("hello from web app"));
    axios.post('http://localhost:5000/chatbots/respond-to-message', this.state.message)
    .then(res => console.log("success"));
    
  }

  render() {
    return (
      <div className="trc-row">
          <h1 className="title">Login bot Display</h1>
          <form className="trc-form" onSubmit={this.onSubmit}>
            <label> Enter Message</label> <br/>          
            <textarea className="trc-input-field" type="text" id="fname" name="message" value={this.state.message}
            onChange={this.onChangeMessage}/>            
            <button className="trc-go-button">Send</button>
          </form>
          
      </div>
    );
  }
}

