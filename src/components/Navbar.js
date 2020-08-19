import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';


const Navbar = () => {
  return(
     <navbar>
       <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/aboutme'>About Me</Link></li>
        <li><Link to='/skills'>Skills</Link></li>
        <li><Link to='/skills2'>Skills2</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
       </ul>
     </navbar>
       
      
  )
}

export default Navbar;