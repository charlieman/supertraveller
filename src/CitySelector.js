import React, {Component} from 'react';
import Header from './Header';
import Hearts from "./Hearts";
import './CitySelector.css';


export default class CitySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      showAbout: false,
    }
  }

  button(cityName) {
    const enabled = this.props.account.lives > 0;
    return <button className={this.state.city === cityName ? 'selected' : ''}
                   disabled={!enabled}
                   onClick={() => this.select(cityName)}>{cityName}</button>;
  }

  render() {
    return (
      <div id="CitySelector">
        <Header account={this.props.account}/>
        <Hearts account={this.props.account}/>
        <p className="question">How much do you know about Peru? Play and win!</p>
        <p className="description" style={{visibility: this.state.showAbout ? 'visible' : 'hidden'}}>
          Next you are going to solve some questions about {this.state.city}. You have 10 seconds to answer each
          question.<br/>
          Go!
        </p>
        {this.props.account.lives <= 0? <p className="description">Play again tomorrow</p> : ""}
        <div className="cities">
          {this.button('Ica')}
          {this.button('Trujillo')}
          {this.button('Huaraz')}
          {this.button('Arequipa')}
          {this.button('Cusco')}
          {this.button('Tarapoto')}
        </div>
        <div className="playArea">
          {this.state.city !== null ? <button className="playButton" onClick={() => this.props.play(this.state.city)}>
            Play Now<br/>
            <small>-</small>
          </button> : ''}
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