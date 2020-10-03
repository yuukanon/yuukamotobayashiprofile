import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { faPassport } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class CardTravel extends React.Component {
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
             <div className="front travel">
              <FontAwesomeIcon icon={faPassport} size="10x" onClick={this.handleClick}/>
            </div>

            <div className="back travel" onClick={this.handleClick}>Love travelling and exploring new experiences with local cuisine and culture. Been to about 50 countries. 
            </div>        
        </ReactCardFlip>

        
      </>
    );
  }
}

export default CardTravel;
