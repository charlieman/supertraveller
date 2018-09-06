import React, {Component} from 'react';

export default class Account extends Component {
  render() {
    return (
      <div id="account">
        <ul>
          <li className="profile"><img src={this.props.account.avatar} alt=""/> Hi! <br/> {this.props.account.username}</li>
          <li onClick={() => this.props.go('trips')}>My Trips</li>
          <li onClick={() => this.props.go('coupons')}>My Coupons</li>
          <li onClick={() => this.props.go('offers')}>Offers</li>
          <li onClick={() => this.props.go('share')}>Share</li>
          <li onClick={() => this.props.go('help')}>Help</li>
          <li onClick={() => this.props.go('about')}>About Us</li>
          <li onClick={() => this.props.go('settings')}>Settings</li>
          <li className="logout" onClick={() => this.props.go('logout')}>Logout</li>
        </ul>
      </div>
    )
  }
}