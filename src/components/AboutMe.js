import React from 'react';
import pic from './IMG_4339.jpg'
import TimeLine from './TimeLine';

const AboutMe = () => {

  return(
    <>
      <div className="profile">
        <div className="profilecontent">
          <h3>Not Just a Front End Web Developer but also </h3>
          <h3>Certified Project Management Professional</h3><br></br>
          <li>
              Results-oriented Front End Web Developer dedicated to creating interactive, user-friendly, and feature-rich websites. 
          </li><br></br>
          <li>
             Building new websites from start to finish by gathering clients' business requirements and providing technical knowledge and expertise. 
          </li><br></br>

          <li>
            Proven organizational and business skills with 10+ years of managing functional to enterprise level project experiences.
          </li>
          
          
        </div>
        <img src={pic} alt="profile"/>
      </div>
      
       <TimeLine />
      
    </>

  )
}

export default AboutMe;