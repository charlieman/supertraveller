import React, {Component} from 'react';

// import './Stage.css';

export default class Stage extends Component {

  render() {
    return (
      <div id="Stage">
        <pre>
        {JSON.stringify(this.props, null, 4)}
        </pre>
      </div>
    );
  }
}