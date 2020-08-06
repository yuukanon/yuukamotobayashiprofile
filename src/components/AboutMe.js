import React from 'react';
import pic from './IMG_4339.jpg'
import TimeLine from './TimeLine';

const AboutMe = () => {

  return(
    <>
      <div className="profile">
        <img src={pic} alt="profile"/>
        <p>Creative and entrepreneurial marketing leader with a knack for developing effective technology roadmaps and expert ability to use analytics and data-driven decision making to deliver marketing and business solutions.As a collaborative professional, I know how to effectively manage projects and implementations that deliver actionable results. My dedication to the craft has enabled me to align core business, revenue, and growth goals within long-range strategic plans.</p>
      </div>
      
       <TimeLine />
      
    </>

  )
}

export default AboutMe;