import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class CardHTML extends React.Component {
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
            <div className="front html">
              <FontAwesomeIcon icon={['fab', 'html5']} size="10x" onClick={this.handleClick}/>
            </div>

            <div className="back html" onClick={this.handleClick}>Created websites fro concept through deployment by assessing UX and UI designs for technical feasibility.
            </div>        
        </ReactCardFlip>

        
      </>
    );
  }
}

export default CardHTML;
