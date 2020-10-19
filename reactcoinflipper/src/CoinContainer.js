import React, { Component } from 'react'
import {choice} from './helpers';
import Coin from './Coin';

export class CoinContainer extends Component {
  static defaultProps = {
    coins: [
    { side: 'heads', imgSrc:'https://upload.wikimedia.org/wikipedia/en/2/2c/Common_face_of_two_euro_coin.jpg'},
    { side: 'tails', imgSrc:'https://www.ecb.europa.eu/euro/coins/common/shared/img/be/Belgium_1euro_2011.jpg'}  
    ]
  };
  constructor(props){
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  flipCoin(){
    const newCoin = choice(this.props.coins);
    this.setState(st => {
    return {
   currCoin: newCoin,
   nFlips: st.nFlips +1,
   nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
   nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0)
  };
});
}
  handleClick(e){
    this.flipCoin();
  }
  render() {
    return (
      <div className='CoinContainer'>
        <h2>Flip a Coin</h2>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}>Click to flip</button>
        <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} {" "} heads and {this.state.nTails} tails. </p>
      </div>
    )
  }
}

export default CoinContainer
