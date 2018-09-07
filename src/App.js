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
          ica: {stage: 0}
        },
      },
      stages: questions,
      settings: {
        questions: 2,
      }
    };

    this.go = this.go.bind(this);
    this.play = this.play.bind(this);
    window.s = this.state;
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
    this.setState({view});
  }

  play(city) {
    console.log(arguments);
    const stage = this.state.stages[city];
    return <Stage stage={stage} account={this.state.account}/>;
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
      default:
        console.log(viewName);
        return null;
    }
  }
}

export default App;
