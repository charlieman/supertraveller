import React, {Component} from 'react';
import Header from "./Header";
import Hearts from "./Hearts";
import './WonPiece.css';

export default class WonPiece extends Component {
  render() {
    return (
      <div id="WonPiece">
        <Header account={this.props.account}/>
        <Hearts account={this.props.account}/>

        <div className="content">
          <p>You won a puzzle piece</p>
          <img src="img/cusco-2a-s.png"/>
        </div>
      </div>
    );
  }
}