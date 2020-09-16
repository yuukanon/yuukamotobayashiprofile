import React from 'react';
import ProgressCircle from '../components/Progress'

const SkillCard = ({ programming, level, since, percentage}) => {
  return (
    <div className="skillcard">
      <div><ProgressCircle percentage={percentage} /></div>
      <div className="skillset">
        <p>{programming}</p>
        <p>{level}</p>
        <p>{since}</p>
      </div>
    </div>
  )
}

export default SkillCard;