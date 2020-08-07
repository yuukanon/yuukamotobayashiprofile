import React from 'react';
import ProgressCircle from './Progress'

const BusinessCard = ({ business, level2, since2, percentage2}) => {
  return (
    <div className="skillcard">
      <div><ProgressCircle percentage={percentage2} /></div>
      <div className="skillset">
        <p>{business}</p>
        <p>{level2}</p>
        <p>{since2}</p>
      </div>
    </div>
  )
}

export default BusinessCard;