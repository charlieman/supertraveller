import React, {Component} from 'react';

import './Stage.css';
import Header from "./Header";
import Hearts from "./Hearts";

export default class Stage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      current: 0,
      checkingAnswer: false,
      selected: null,
      points: 0,
      message: null,
    };
  }

  componentDidMount() {
    const questions = this.getRandomQuestions();
    this.setState({
      questions,
    });
  }

  static fisherYatesShuffle(choices) {
    let i = choices.length;
    if (i === 0) throw new Error('empty list');
    while (--i) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = choices[i];
      choices[i] = choices[j];
      choices[j] = temp;
    }
  }

  getRandomQuestions() {
    const indices = [...Array(this.props.data.questions.length).keys()]; // range(questions.length)
    Stage.fisherYatesShuffle(indices);
    return indices.map(i => this.props.data.questions[i]);
  }

  renderAnswer(answer, correct) {
    const styles = [];
    if (this.state.checkingAnswer && this.state.selected === answer.i) {
      styles.push(correct === answer.i ? 'correct' : 'failed');
    }
    return (
      <li key={answer.i}>
        <button value={answer.i}
                disabled={this.state.checkingAnswer}
                className={styles.join(' ')}
                onClick={() => this.selectAnswer(answer.i)}>{answer.text}</button>
      </li>
    );
  }

  render() {
    if (!this.state.questions || this.state.questions.length === 0) {
      return 'Loading...';
    }
    const question = this.state.questions[this.state.current];
    let answers = question.answers.map((text, i) => ({i, text}));
    Stage.fisherYatesShuffle(answers);

    return (
      <div id="Stage">
        <Header account={this.props.account}/>
        <Hearts account={this.props.account}/>
        <div className="playArea">
          <h1>{this.props.data.stageName}</h1>
          <p className="question">{question.question}</p>
          <ol className="answers">
            {answers && answers.map(answer => this.renderAnswer(answer, question.correct))}
          </ol>
          <p>{this.state.message}</p>
        </div>
      </div>
    );
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async selectAnswer(answer) {
    this.setState({checkingAnswer: true, selected: answer});
    const question = this.state.questions[this.state.current];
    // Todo: do this check on the server side
    const win = question.correct === answer;
    let points = this.state.points;
    if (win) {
      points += 1;
      this.setState({message: "You made it!", points});

      if (points >= this.props.settings.numberOfWins) {
        this.props.winPiece(this.props.data.experience);
        return;
      }
    } else {
      this.setState({message: "Too bad, try again!"})
    }

    await this.sleep(2000);
    if (!win && this.props.account.lives > 0) {
      this.props.die();
    }
    const next = this.state.current + 1;
    if (next > this.props.settings.numberOfQuestions) {
      throw new Error("Out of Questions error!");
    }
    this.setState({current: next, checkingAnswer: false, selected: null, message: null});
  }
}