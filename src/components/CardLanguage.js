import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from '@fortawesome/free-solid-svg-icons'



class CardLanguage extends React.Component {
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
            <div className="front language">
              <FontAwesomeIcon icon={faLanguage} size="10x" onClick={this.handleClick}/>
            </div>

            <div className="back language" onClick={this.handleClick}>Japanese - Native, English - Peofessional Proficiency.
            </div>        
        </ReactCardFlip>

        
      </>
    );
  }
}

export default CardLanguage;
