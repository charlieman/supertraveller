import React, {Component} from 'react';
import Header from './Header';

import './CitySelector.css';

export default class CitySelector extends Component {
  static alive() {
    return (<img src="img/heart-full.png" height="20" alt="life"/>);
  }

  static dead() {
    return (<img src="img/heart-empty.png" height="20" alt="life"/>);
  }

  render() {
    const lives = this.props.account.lives;
    return (
      <div id="CitySelector">
        <Header account={this.props.account}/>
        <ul className="lives">
          <li>{lives > 0 ? CitySelector.alive() : CitySelector.dead()}</li>
          <li>{lives > 1 ? CitySelector.alive() : CitySelector.dead()}</li>
          <li>{lives > 2 ? CitySelector.alive() : CitySelector.dead()}</li>
        </ul>
      </div>
    );
  }
}