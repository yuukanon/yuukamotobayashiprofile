import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function Navbar () {
  const [open, setOpen] = useState(false);

  const navOpen = () => setOpen(true);
  const burger = () => setOpen (false);

  return (

    <>
      <div className={open ? 'burgerOff' : 'burgerOn'} onClick={navOpen}>
        <FontAwesomeIcon 
          icon={faBars} size='3x' />
      </div>
      <div className={open ? 'navOpen' : 'navOff'} onClick={burger}>
        <ul>
        <FontAwesomeIcon 
          icon={faTimes} size='3x' />
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/aboutme'>About Me</Link></li>
          <li><Link to='/skills'>Skills</Link></li>
          <li><Link to='/skills2'>Skills2</Link></li>
          <li><Link to='/project'>Projects</Link></li>
          <li><Link to='/projects'>Projects2</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    </>
  )

}



export default Navbar;