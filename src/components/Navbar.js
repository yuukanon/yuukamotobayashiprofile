import React from 'react';
import { Link } from 'react-router-dom';
import { bool } from 'prop-types';


const Navbar = ({ open }) => {
  

  return(
      <>
       <div open={open} className="navbar">  
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

Navbar.propTypes = {
  open: bool.isRequired,
}

export default Navbar;