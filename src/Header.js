import React, {Component} from 'react';

import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div id="Header">
        <img src={this.props.account.avatar} alt=""/> {this.props.account.username}
        <div className="level-area">
          <div className="level">Level {this.props.account.level}</div>
          <div className="exp">exp: <progress max="100" value={this.props.account.progress}/></div>
        </div>
      </div>
    );
  }
}