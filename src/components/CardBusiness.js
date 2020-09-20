import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class CardBusiness extends React.Component {
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
             <div className="front business">
              <FontAwesomeIcon icon={faChartLine} size="10x" onClick={this.handleClick}/>
            </div>

            <div className="back business" onClick={this.handleClick}>10+years of global, multi-national business experiences by holding bottom-line accountability for the company's strategy vision inoto operational processes.  
            </div>        
        </ReactCardFlip>

        
      </>
    );
  }
}

export default CardBusiness;
