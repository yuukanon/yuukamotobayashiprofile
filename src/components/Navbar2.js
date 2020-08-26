import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar2(props) {
  const isNavOn = false;

  return(
    <div className="burger">
      <FontAwesomeIcon 
      isNavOn={isNavOn}
      icon={faBars} size='3x' />
    </div>
  )

}





export default Navbar2;