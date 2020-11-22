import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {

  render() {
    return (
        <div className="trc-row" id="about">
            <h1 className="title">About ChatManager Libary</h1>
            <p>Chat Manager want to solve the problem that A developer encounters when he wants to integrate bot to their
                project.
            </p>
            <h1 className="title">Authors</h1>          
            <ul className="trc-list">
                <li>Alfred Garcia</li>
                <li>Wilmer Perez</li>
                <li>Alleene Lacaba</li>
                <li>Xiaoxia Zhang</li>
                <li>Brian Chambers</li>               
            </ul>
            <h1 className="title">Accomplishment So far</h1>
            <ul className="trc-list">
                <li><a href="https://csci-49900-fall-2020.github.io/project-chatmanager/">Created Documentation</a></li>
                <li>Integrated to a website</li>
                <li>Made it part of nmp module for easy installation</li>
                               
            </ul>
            <h1 className="title">What we plan to accomplish next</h1>
            <ul className="trc-list">
                <li>expand to include team</li>
                <li>expand to include telegram</li>
                            
            </ul>
            <h1 className="title">Installation and Tutorial</h1>
            <ul className="trc-list">
                <li><a href="https://github.com/CSCI-49900-Fall-2020/Project-chatmanagerlibrary/blob/develop/README.md">Github Readme</a></li>                 
            </ul>
        </div>
    );
  }
}