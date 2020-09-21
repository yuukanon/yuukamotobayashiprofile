import React from 'react';
import CardJs from './CardJs';
import CardReact from './CardReact';
import CardHTML from './CardHTML';
import CardCSS from './CardCSS';
import CardPM from './CardPM';
import CardLanguage from './CardLanguage';
import CardFitness from './CardFitness';
import CardTravel from './CardTravel';
import CardBusiness from './CardBusiness';


const FlipCard = () => {
  return (
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
  )
}

export default FlipCard;