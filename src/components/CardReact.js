import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class CardReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <>
        <ReactCardFlip 
        isFlipped={this.state.isFlipped}
        flipSpeedBackToFront={2}
        flipSpeedFrontToBack={2}
        >
            <div className="front react">
              <FontAwesomeIcon icon={['fab', 'react']} size="10x" onClick={this.handleClick}/>
            </div>

            <div className="back react" onClick={this.handleClick}>Developed several websites with React, API, and React libraries.
            </div>        
        </ReactCardFlip>

        
      </>
    );
  }
}

export default CardReact;
