import React, {Component} from 'react';
import Header from './Header';

import './Play.css';

export default class Play extends Component {
  render() {
    return (
      <div id="Play">
        <Header account={this.props.account}/>
        <ul className="buttonList">
          <li><button onClick={() => this.props.go('city-selection')}>Play Now</button></li>
          <li><button onClick={() => this.props.go('ranking')}>My Ranking</button></li>
        </ul>
      </div>
    )
  }
}