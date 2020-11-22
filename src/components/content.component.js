import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Link } from 'react-router-dom';

import LoginBot from "./loginBot.component"
import StartApp from "./startApp.component"

export default class Content extends Component {

  render() {
    return (

      <div>
          <Router>
            <Route path="/" exact component={LoginBot} />
            <Route path="/edit/:id" component={StartApp} />
            
          </Router>
          
      </div>
    );
  }
}