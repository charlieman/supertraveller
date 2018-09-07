import React, {Component} from 'react';
import Header from './Header';

import './CitySelector.css';

export default class CitySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      showAbout: false,
    }
  }

  static alive() {
    return (<img src="img/heart-full.png" height="20" alt="life"/>);
  }

  static dead() {
    return (<img src="img/heart-empty.png" height="20" alt="life"/>);
  }

  button(cityName) {
    return <button className={this.state.city === cityName ? 'selected' : ''}
                   onClick={() => this.select(cityName)}>{cityName}</button>;
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
        <p className="question">Where do you want to travel?</p>
        <p className="description" style={{visibility: this.state.showAbout ? 'visible' : 'hidden'}}>
          Next you are going to solve some questions about {this.state.city}. You have 10 seconds to answer each
          question.<br/>
          Go!
        </p>
        <div className="cities">
          {this.button('Ica')}
          {this.button('Trujillo')}
          {this.button('Huaraz')}
          {this.button('Arequipa')}
          {this.button('Cusco')}
          {this.button('Tarapoto')}
        </div>
        <div className="playArea">
          {this.state.city !== null ? <button className="playButton">Play Now</button> : ''}
        </div>
      </div>
    );
  }

  select(city) {
    if (this.state.city === city) {
      city = null;
    }
    this.setState({city, showAbout: city !== null});
  }
}