import React from 'react';
import pic1 from './weather.png';



const Project = () => {
  return (
    <div className="project">
      <div className="p1">
        <img src={pic1} alt="weather"/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, fuga!</p>
      </div>
      <div className="p2">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, fuga!</p>
      <img src={pic1} alt="weather"/>
      </div>
      <div className="p3">
        <img src={pic1} alt="weather"/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, fuga!</p>
      </div>
    </div>

  )
}

export default Project;