import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import pic1 from './expert.png';
import pic2 from './austinweather.png';
import pic3 from './Nokia.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


 
const Project = () => {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img src={pic1} />
          </div>
          <div className="project-text">
            <h3>First Website</h3>
            <p>The first website created from scratch with HTML, CSS, and Javascript.</p>
            <button><a href="https://github.com/yuukanon/homeexpert">Check it on GitHub  <FontAwesomeIcon icon={['fab', 'github']} size="lg" /></a></button>
          </div>
        </div>
        <div className="each-fade">
        <div className="image-container">
            <img src={pic2} />
          </div>
          <div className="project-text">
            <h3>Weather App</h3>
            <p>Used React API to call 5 day weather forecast based on a Searched city.</p>
            <button><a href="https://github.com/yuukanon/weatherapp">Check it on GitHub  <FontAwesomeIcon icon={['fab', 'github']} size="lg" /></a></button>
          </div>
        </div>
        <div className="each-fade">
        <div className="image-container">
            <img src={pic3} />
          </div>
         
          <div className="project-text">
            <h3>Hackathon</h3>
            <p>Developed a product landing page for Nokia Featured Phone in 24 hours.</p>
            <button><a href="https://github.com/nokia-hackathon-group4/new-nokia-winner">Check it on GitHub  <FontAwesomeIcon icon={['fab', 'github']} size="lg" /></a></button>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Project;