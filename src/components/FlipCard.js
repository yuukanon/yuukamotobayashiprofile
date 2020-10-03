import React from 'react';
import CardJs from './CardJs';
import CardReact from './CardReact';
import CardHTML from './CardHTML';
import CardCSS from './CardCSS';
import CardPM from './CardPM';
import CardLanguage from './CardLanguage';



const FlipCard = () => {
  return (
    <>
      <div className="fadeout"><h2>Click the cards to check my skills!</h2></div>
      <div className="skillcard-container">
        <div className="skillcard 1">
          <CardHTML />
          <CardReact />
        </div>
      
        <div className="skillcard 2">
          <CardCSS />
          <CardPM />
        </div>

        <div className="skillcard 3">
          <CardJs />
          <CardLanguage />
        </div>
      </div>
    </>
  )
}

export default FlipCard;