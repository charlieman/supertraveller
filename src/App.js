import React, {Component} from 'react';
import './App.css';
import Menu from './Menu';
import Home from './Home';
import Account from './Account';
import Play from './Play';
import CitySelector from "./CitySelector";
import Stage from "./Stage";
import questions from './questions.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home',
      account: {
        avatar: 'avatar.png',
        username: 'Luis Ruiz',
        progress: 70,
        lives: 2,
        experience: 0,
        stages: {
          Cusco: {stage: 0}
        },
      },
      questions: questions,
      settings: {
        questions: 2,
        cooldown: 120, // how much time to wait before coupon is available again in hours
        discount: 50, // discount percentage
      },
      selectedStage: null,
    };

    this.go = this.go.bind(this);
    this.play = this.play.bind(this);
    window.getState = () => this.state;
  }

  render() {
    const view = this.getView(this.state.view);
    return (
      <div id="App">
        <div className="view">
          {view}
        </div>
        <Menu go={this.go}/>
      </div>
    );
  }

  go(view) {
    this.setState({view, selectedStage: null});
  }

  selectStage(city) {
    const quiz = this.state.questions[city];
    let userStage = this.state.account.stages[city];
    if (quiz === undefined) {
      return null
    }
    if (userStage === undefined) {
      userStage = {stage: 0};
    }
    return quiz.stages[userStage.stage];
  }

  play(city) {
    console.log(city);
    const selectedStage = this.selectStage(city);
    this.setState({selectedStage, view: 'stage'});
  }

  getView(viewName) {
    switch (viewName) {
      case 'home':
        return (<Home/>);
      case 'trips':
        return (<div>trip</div>);
      case 'account':
        return (<Account account={this.state.account}/>);
      case 'play':
        return (<Play account={this.state.account} go={this.go}/>);
      case 'help':
        return (<div>help</div>);
      case 'city-selection':
        return (<CitySelector account={this.state.account} play={this.play}/>);
      case 'stage':
        return (
          <Stage questions={this.state.selectedStage} account={this.state.account} settings={this.state.account}/>);
      default:
        console.log(viewName);
        return null;
    }
  }
}

export default App;
