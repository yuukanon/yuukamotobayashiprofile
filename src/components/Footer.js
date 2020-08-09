import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      window.location.assign('https://www.linkedin.com/in/yuukamotobayashi/');
    }
  });

  return (
    <div className="icon">
      <div className="linkedin" onClick={() => setClicked(true)}><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg"/></div>
      <div className="github"><a href="http://github.com/yuukanon" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="lg" /></a></div>
      <div className="envelope"><a href="mailto:yuuka.motobayashi@gmail.com"><FontAwesomeIcon icon="envelope" size="lg"/></a></div>
    </div>
  )
}


export default Footer;