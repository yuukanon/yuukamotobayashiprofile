import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import pic1 from './weather.png';

 
const Project2 = () => {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img src={pic1} />
          </div>
          <p className="slide-box">
              <h3>First Website</h3>
              <p>This is the first website created as a course project from scratch with HTML, CSS, and Javascript.</p>
          </p>
        </div>
        <div className="each-fade">
        <div className="image-container">
            <img src={pic1} />
          </div>
          <p className="slide-box">
              <h3>Weather App</h3>
              <p>Used React API to call 5 day weather forecast based on a Searched city</p>
          </p>
        </div>
        <div className="each-fade">
        <div className="image-container">
            <img src={pic1} />
          </div>
          <p className="slide-box">
              <h3>Weather App</h3>
              <p>Used React API to call 5 day weather forecast based on a Searched city</p>
          </p>
        </div>
      </Fade>
    </div>
  )
}

export default Project2;