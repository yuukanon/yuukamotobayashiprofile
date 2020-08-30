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
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, facilis!</p>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src="https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80" />
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, facilis!</p>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={pic1} />
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, facilis!</p>
        </div>
      </Fade>
    </div>
  )
}

export default Project2;