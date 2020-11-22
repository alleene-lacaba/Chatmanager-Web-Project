import React, { Component } from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';

import Login from "./login.component"

export default class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
      }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let content;
        if (isLoggedIn) {
        content = <Login />;
        } else {
        content = <Main/>;
        }

        return (
            {content}
        
        );
    }
}