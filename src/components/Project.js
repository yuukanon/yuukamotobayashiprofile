import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import pic1 from './expert.png';
import pic2 from './austinweather.png';
import pic3 from './nokia.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


 
const Project = () => {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img src={pic1} />
          </div>
          <p className="slide-box">
              <h3>First Website</h3>
              <p>The first website created as a course project from scratch with HTML, CSS, and Javascript.</p>
              <button><a href="http://">Check it in GitHub  <FontAwesomeIcon icon={['fab', 'github']} size="lg" /></a></button>
          </p>
          
        </div>
        <div className="each-fade">
        <div className="image-container">
            <img src={pic2} />
          </div>
          <p className="slide-box">
              <h3>Weather App</h3>
              <p>Used React API to call 5 day weather forecast based on a Searched city.</p>
          </p>
        </div>
        <div className="each-fade">
        <div className="image-container">
            <img src={pic3} />
          </div>
          <p className="slide-box">
              <h3>Hackathon</h3>
              <p>Developed a product landing page for Nokia Featured Phone less than 24 hours.</p>
          </p>
        </div>
      </Fade>
    </div>
  )
}

export default Project;