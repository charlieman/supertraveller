import React, {Component} from 'react';
import './App.css';
import Menu from './Menu';
import Home from './Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home',
    };


    this.go = this.go.bind(this);
  }

  render() {
    const view = this.getView(this.state.view);
    return (
      <div className="App">
        {view}
        <Menu go={this.go}/>
      </div>
    );
  }

  go(view) {
    this.setState({view});
  }

  getView(viewName) {
    switch (viewName) {
      case 'home':
        return (<Home/>);
      case 'trips':
        return (<div>trip</div>);
      case 'account':
        return (<div>account</div>);
      case 'play':
        return (<div>play</div>);
      case 'help':
        return (<div>help</div>);
      default:
        return null;
    }
  }
}

export default App;
