import React from 'react';
import ProgressCircle from './Progress'

const LanguageCard = ({ language, level3, percentage3}) => {
  return (
    <div className="skillcard">
      <div><ProgressCircle percentage={percentage3} /></div>
      <div className="skillset">
        <p>{language}</p>
        <p>{level3}</p>
      </div>
    </div>
  )
}

export default LanguageCard;