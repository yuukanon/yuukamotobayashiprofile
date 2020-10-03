import React from 'react';
import pic1 from './weather.png';
import Weather from './Weather'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const OldProject = () => {
  return (
    <div className="project">
      <div className="p1">
        <img src={pic1} alt="weather"/>
        <div className="pie">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, fuga!</p>
          <Weather />
        </div>
      </div>
      <div className="p2">
      <div className="p2icon">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, fuga!</p>
        <FontAwesomeIcon icon={['fab', 'react']} size="3x" />
        <FontAwesomeIcon icon={['fab', 'react']} size="2x"  />
        <FontAwesomeIcon icon={['fab', 'react']} size="2x" />
      </div>
      <img src={pic1} alt="weather"/>
      </div>
      <div className="p3">
        <img src={pic1} alt="weather"/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, fuga!</p>
      </div>
    </div>

  )
}

export default OldProject;