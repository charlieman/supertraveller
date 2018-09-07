import React, {Component} from 'react';
import './App.css';
import Menu from './Menu';
import Home from './Home';
import Account from './Account';
import Play from './Play';
import CitySelector from "./CitySelector";
import Stage from "./Stage";
import questions from './questions.json';
import Coupons from "./Coupons";
import couponData from './coupons.json';

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
          Cusco: {stage: 0},
        },
        puzzles: {
          Cusco: {
            quiz: [true, false, false],
            share: [true, true],
            trip: [true],
          },
          Arequipa: {
            quiz: [false, false, false],
            share: [true, false],
            trip: [false],
          },
          Ica: {
            quiz: [false, false, false],
            share: [false, true],
            trip: [true],
          },
        }
      },
      questions: questions,
      coupons: couponData.coupons,
      settings: {
        numberOfWins: 2, // questions asked per stage
        cooldown: 120, // how much time to wait before coupon is available again in hours
        discount: 50, // discount percentage
        pointsPerQuestion: 9,
      },
      selectedCity: null,
      selectedStage: null,
    };

    this.go = this.go.bind(this);
    this.play = this.play.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.die = this.die.bind(this);
    this.winPiece = this.winPiece.bind(this);
    window.getState = () => this.state;
  }

  componentDidMount() {
    this.play('Cusco');
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
    if (quiz === undefined) {
      return null;
    }
    const puzzle = this.state.account.puzzles[city];
    const stage = puzzle.quiz.indexOf(false);
    if (stage === -1) {
      return 0
    }
    return stage;
  }

  play(city) {
    if (this.state.account.lives <= 0) {
      alert('Try again tomorrow');
      this.setState({selectedCity: null, selectedStage: null, view: 'city-selection'});
      return;
    }
    const selectedStage = this.selectStage(city);
    this.setState({selectedCity: city, selectedStage, view: 'stage'});
  }

  addExperience(points) {
  }

  winPiece(experience) {
    console.log('addExperience', experience);
    const stage = this.state.selectedStage;
    const city = this.state.selectedCity;
    const puzzle = this.state.account.puzzles[city];
    puzzle.quiz[stage] = true;
    const account = {
      ...this.state.account,
      experience: this.state.account.experience + experience,
      stages: {
        ...this.state.account.stages,
        [city]: stage + 1,
      },
      puzzles: {
        ...this.state.account.puzzles,
        [city]: puzzle,
      }
    };
    this.setState({account, selectedCity: null, selectedStage: null, view: 'won-piece'});
  }

  die() {
    const account = {
      ...this.state.account,
      lives: this.state.account.lives - 1
    };
    this.setState({account});
    if (this.state.account.lives <= 0) {
      alert('Bad luck :(. Try again tomorrow!');
      this.setState({selectedCity: null, selectedStage: null, view: 'city-selection'});
    }
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
      case 'coupons':
        return (<Coupons account={this.state.account} coupons={this.state.coupons}/>);
      case 'stage':
        const city = this.state.selectedCity;
        const quiz = this.state.questions[city];
        const stageData = quiz.stages[this.state.selectedStage];
        console.log(city, quiz, stageData, this.state.selectedStage);
        return (
          <Stage data={stageData}
                 account={this.state.account}
                 settings={this.state.settings}
                 addExperience={this.addExperience}
                 die={this.die}
                 winPiece={this.winPiece}
          />);
      case 'won-piece':
        return (<div>Congratulations you won a puzzle piece!</div>);
      default:
        console.log(viewName);
        return null;
    }
  }
}

export default App;
