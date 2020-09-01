import React from 'react';
import pic from './IMG_4339.jpg'
import TimeLine from './TimeLine';

const AboutMe = () => {

  return(
    <>
      <div className="profile">
        <img src={pic} alt="profile"/>
        <div>

          <h3>Not Just a Front End Web Developer but also Certified Project Management Professional</h3><br></br>
          <p>Offering 10+ years of progressive achievement managing projects, overseeing systems implementations, and translating business strategies into effective operational processes and system integration requirements.</p><br></br>
          <p>Results-oriented Front-end Developer dedicated to creating and optimizing interactive, user-friendly, and feature-rich websites. Building new websites from start to finish by gathering clients' business requirements and providing techncal knowledge and expertise. </p>
        </div>
      </div>
      
       <TimeLine />
      
    </>

  )
}

export default AboutMe;