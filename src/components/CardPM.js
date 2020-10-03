import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks } from '@fortawesome/free-solid-svg-icons'



class CardPM extends React.Component {
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
            <div className="front pm">
              <FontAwesomeIcon icon={faTasks} size="10x" onClick={this.handleClick}/>
            </div>

            <div className="back pm" onClick={this.handleClick}>Certified Project Management Professional with 10+ years of hands-on PM experiences from functional process improvement to enterprise level system implementation.
            </div>        
        </ReactCardFlip>

        
      </>
    );
  }
}

export default CardPM;
