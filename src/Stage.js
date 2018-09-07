import React, {Component} from 'react';

import './Stage.css';

export default class Stage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      current: 0,
    };
  }

  componentDidMount() {
    const questions = this.getRandomQuestions();
    this.setState({
      questions,
      current: 0,
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
    const chosen = indices.slice(0, this.props.settings.numberOfQuestions);
    return chosen.map(i => this.props.data.questions[i]);
  }

  render() {
    if (this.state.questions && this.state.questions.length === 0) {
      return 'Loading...';
    }
    const question = this.state.questions[this.state.current];
    let answers = question.answers.map((text, i) => ({i, text}));
    Stage.fisherYatesShuffle(answers);

    return (
      <div id="Stage">
        <h1>{this.props.data.stageName}</h1>
        <p className="question">{question.question}</p>
        <ol className="answers">
          {answers && answers.map(answer => (
            <li key={answer.i}>
              <button value={answer.i}>{answer.text}</button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}