import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const Discord = require('discord.js');
const client = new Discord.Client();

export default class StartApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      botPlatforms: [
        {id: 1, value: "Discord", isChecked: false},
        {id: 2, value: "Slack", isChecked: false},
        
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    client.on('ready', () => {
      console.log(`Logged in as Alleene!`);
      
    
    });  
    client.login(this.state.token);  
    
  }

  handleLogout(){
      function resetBot(channel) {
        // send channel a message that you're resetting bot [optional]
        channel.send('Resetting...')
        .then(msg => client.destroy())
        .then(() => client.login());
      }
  }
  render() {
    return (
      <div className="trc-row">
      <h1 className="title">Stat App Display</h1>
      <form className="trc-form">
      
        <input type="checkbox" checked="checked" value="Discord"/>
        <label for="vehicle1"> Discord</label><br/>
        <input type="checkbox" name="Slack" value="Slack"/>
        <label for="vehicle2"> Slack</label><br/>
        <input type="checkbox" name="Teams" value="Teams"/>
        <label for="vehicle3"> Teams</label><br/><br/>
        <button className="trc-go-button" onclick={this.handleClick}>Submit</button>
      </form>
  </div>
    );
  }
}