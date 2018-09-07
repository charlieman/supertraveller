import React, {Component} from 'react';
import './Hearts.css';

export default class Hearts extends Component {

  static alive() {
    return (<img src="img/heart-full.png" height="20" alt="life"/>);
  }

  static dead() {
    return (<img src="img/heart-empty.png" height="20" alt="life"/>);
  }

  render() {
    const lives = this.props.account.lives;
    return (
      <ul id="Hearts">
        <li>{lives > 0 ? Hearts.alive() : Hearts.dead()}</li>
        <li>{lives > 1 ? Hearts.alive() : Hearts.dead()}</li>
        <li>{lives > 2 ? Hearts.alive() : Hearts.dead()}</li>
      </ul>
    );
  }
}