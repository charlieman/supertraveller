import React, {Component} from 'react';
import './Coupons.css';
import Header from "./Header";

export default class Coupons extends Component {

  renderCoupon(coupon) {
    const quizPieces = coupon.quiz.filter((piece, i) => {
      const couponProgress = this.props.account.puzzles[coupon.name];
      if (couponProgress === undefined) return false;
      return couponProgress.quiz[i];
    });
    const sharePieces = coupon.share.filter((piece, i) => {
      const couponProgress = this.props.account.puzzles[coupon.name];
      if (couponProgress === undefined) return false;
      return couponProgress.share[i];
    });
    const tripPieces = coupon.trip.filter((piece, i) => {
      const couponProgress = this.props.account.puzzles[coupon.name];
      if (couponProgress === undefined) return false;
      return couponProgress.trip[i];
    });
    return (
      <div key={coupon.name} className="base">
        <img src={coupon.base} alt="base" height="180"/>
        <p>{coupon.name}</p>
        {quizPieces.map(piece => {
          const style = {left: `${piece.coords[0]}px`, top: `${piece.coords[1]}px`};
          return (<img key={piece.fill} src={piece.fill} alt="piece" height={piece.height} style={style}/>);
        })}
        {sharePieces.map(piece => {
          const style = {left: `${piece.coords[0]}px`, top: `${piece.coords[1]}px`};
          return (<img key={piece.fill} src={piece.fill} alt="piece" height={piece.height} style={style}/>);
        })}
        {tripPieces.map(piece => {
          const style = {left: `${piece.coords[0]}px`, top: `${piece.coords[1]}px`};
          return (<img key={piece.fill} src={piece.fill} alt="piece" height={piece.height} style={style}/>);
        })}
        <span className="discount">{coupon.discount}</span>
      </div>
    );
  }

  render() {
    return (
      <div id="Coupons">
        <Header account={this.props.account}/>
        <div id="canvas">
          {this.props.coupons.map(coupon => this.renderCoupon(coupon))}
        </div>
      </div>
    );
  }
}