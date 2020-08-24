import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  

  return(
      <>
        <div className="burger">
          <FontAwesomeIcon icon={faBars} size='3x' />
        </div>

       <div className="navbar">  
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/aboutme'>About Me</Link></li>
          <li><Link to='/skills'>Skills</Link></li>
          <li><Link to='/skills2'>Skills2</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
       </div>
      </>

  )
}



export default Navbar;