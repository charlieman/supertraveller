import React, {Component} from 'react';
import Header from './Header';

export default class Play extends Component {
  render() {
    return (
      <div>
        <Header account={this.props.account}/>
        <ul id="play">
          <li>Play Now</li>
          <li>My Ranking</li>
        </ul>
      </div>
    )
  }
}