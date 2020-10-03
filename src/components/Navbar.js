import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';


function Navbar () {
  

  return (

    <>
      <div className="top-navbar">
        <ul>
        <FontAwesomeIcon/>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/aboutme'>About Me</Link></li>
          <li><Link to='/skills'>Skills</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    </>
  )

}



export default Navbar;