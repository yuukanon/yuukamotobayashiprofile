import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class CardCSS extends React.Component {
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
            <div className="front css">
              <FontAwesomeIcon icon={['fab', 'css3-alt']} size="10x" onClick={this.handleClick}/>
            </div>

            <div className="back css" onClick={this.handleClick}>Created several websites with HTML or React by applying CSS for better UI and UX on desktop and mobile experiences.
            </div>        
        </ReactCardFlip>

        
      </>
    );
  }
}

export default CardCSS;
