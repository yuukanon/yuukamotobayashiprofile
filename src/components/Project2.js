import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import pic1 from './expert.png';
import pic2 from './weather.png';
import pic3 from './nokia.png';
 
class Project2 extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={pic1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={pic2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={pic3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};
 
// ReactDOM.render(<Project2 />, document.querySelector('.demo-carousel'));

export default Project2;