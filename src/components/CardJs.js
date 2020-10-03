import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class CardJs extends React.Component {
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
            <div className="front js">
              <FontAwesomeIcon icon={['fab', 'js']} size="10x" onClick={this.handleClick}/>
            </div>

            <div className="back js" onClick={this.handleClick}>Good understanding on Javascript. Mainly focus on React Js.
            </div>        
        </ReactCardFlip>

        
      </>
    );
  }
}

export default CardJs;
