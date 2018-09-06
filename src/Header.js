import React, {Component} from 'react';

import './Header.css';

export default class Header extends Component {
  render() {
    const progress = this.props.account.experience % 100;
    const level = Math.floor(this.props.account.experience / 100) + 1;
    return (
      <div id="Header">
        <img src={this.props.account.avatar} alt=""/> {this.props.account.username}
        <div className="level-area">
          <div className="level">Level {level}</div>
          <div className="exp">exp: <progress max="100" value={progress}/></div>
        </div>
      </div>
    );
  }
}