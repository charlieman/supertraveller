import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        return (
            <ul id="Menu">
              <li><button onClick={() => this.props.go('home')}>Home</button></li>
              <li><button onClick={() => this.props.go('trips')}>My Trips</button></li>
              <li><button onClick={() => this.props.go('account')}>My Account</button></li>
              <li><button onClick={() => this.props.go('play')}>Play</button></li>
              <li><button onClick={() => this.props.go('help')}>Help</button></li>
            </ul>
        );
    }
}