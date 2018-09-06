import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={this.props.account.avatar} alt=""/> {this.props.account.username}
        <div className="level">Level</div>
        <div className="exp">exp: <progress max="100" value={this.props.account.progress}/></div>
      </div>
    );
  }
}