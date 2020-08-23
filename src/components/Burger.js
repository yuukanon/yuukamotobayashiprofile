import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { bool, func } from 'prop-types';


const Burger = ({open, setOpen}) => {

  return (
      <div className="burger" open={open} onClick={() => setOpen(!open)}>
      <FontAwesomeIcon icon={faBars} size='3x' />
      </div>
    

  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;