import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        return (
            <ul className="menu">
                <li onClick={() => this.props.go('home')}>Home</li>
                <li onClick={() => this.props.go('trips')}>My Trips</li>
                <li onClick={() => this.props.go('account')}>My Account</li>
                <li onClick={() => this.props.go('play')}>Play</li>
                <li onClick={() => this.props.go('help')}>Help</li>
            </ul>
        );
    }
}