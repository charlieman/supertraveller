import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        return (
            <ul className="menu">
                <li>Home</li>
                <li>My Trips</li>
                <li>My Account</li>
                <li>Play</li>
                <li>Help</li>
            </ul>
        );
    }
}