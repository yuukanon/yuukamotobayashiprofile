import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import pic1 from './weather.png';
import pic3 from './Nokia.png';


 
const MediaProject = () => {
  return (
    <div className="media-slide-container">
      <Fade>
        <div className="media-each-fade">
          <div className="media-image-container">
            <img src={pic1} />
          </div>
          <p className="media-slide-box">
              <h3>First Website</h3>
              <p>The first website created as a course project from scratch with HTML, CSS, and Javascript.</p>
          </p>
        </div>
        <div className="media-each-fade">
        <div className="media-image-container">
            <img src={pic1} />
          </div>
          <p className="media-slide-box">
              <h3>Weather App</h3>
              <p>Used React API to call 5 day weather forecast based on a Searched city.</p>
          </p>
        </div>
        <div className="madia-each-fade">
        <div className="media-image-container">
            <img src={pic3} />
          </div>
          <p className="media-slide-box">
              <h3>Hackathon</h3>
              <p>Developed a product landing page for Nokia Featured Phone less than 24 hours.</p>
          </p>
        </div>
      </Fade>
    </div>
  )
}

export default MediaProject;