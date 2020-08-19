import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {

  return (
    <div className="icon">
      <div className="linkedin"><a href="https://www.linkedin.com/in/yuukamotobayashi/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" /></a></div>
      <div className="github"><a href="http://github.com/yuukanon" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="lg" /></a></div>
      <div className="envelope"><a href="mailto:yuuka.motobayashi@gmail.com"><FontAwesomeIcon icon="envelope" size="lg"/></a></div>
    </div>
  )
}


export default Footer;