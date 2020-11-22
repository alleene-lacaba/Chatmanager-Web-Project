import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ChatManager Functions</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Start App</Link>
          </li>
          <li className="navbar-item">
          <Link to="/" className="nav-link">Login Bot</Link>
          </li>
          <li className="navbar-item">
          <Link to="/" className="nav-link">Set bot Status</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">setupCommandListener</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">sendMessageToAllChannels</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">sendMessageChannel</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">getChannels</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}