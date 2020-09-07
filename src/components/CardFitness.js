import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class CardFitness extends React.Component {
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
        flipSpeedBackToFront={3}
        flipSpeedFrontToBack={3}
        >
             <div className="front fitness">
              <FontAwesomeIcon icon={faDumbbell} size="10x" onClick={this.handleClick}/>
            </div>

            <div className="back fitness" onClick={this.handleClick}>Gym goer for at minimu 4 times a week. Enjoy weight lifting for last two years. 
            </div>        
        </ReactCardFlip>

        
      </>
    );
  }
}

export default CardFitness;
