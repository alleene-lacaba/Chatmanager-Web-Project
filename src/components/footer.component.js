import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {

  render() {
    return (
      <div className="trc-row" id="footer">
          <p class="footer-p">&copy; 2020 ChatManagerGroup. All rights reserved.</p>
      </div>
    );
  }
}