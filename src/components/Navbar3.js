import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

class NavBar3 extends Component {
    constructor(){
        super()
        this.state = {
            open: false,
            hideOrShowHambugerDropDown: 'nav'
        }
    }

    handleClick = () => {
        this.setState({open: !this.state.open});
    }

    displayHamburgerMenu = () => {
      return (
        <HamburgerMenu
                isOpen={this.state.open}
                menuClicked={this.handleClick.bind(this)}
                width={18}
                height={15}
                strokeWidth={1}
                rotate={0}
                color='white'
                borderRadius={0}
                animationDuration={0.5}
          />
      )
    }

    displayNavBar = () => {
      return (
        <ul className='nav'>
          <li className='nav-link'><Link to='/' >Home</Link></li>
          <li className='nav-link'><Link to='/aboutme'>About Me</Link></li>
          <li className='nav-link'><Link to='/skills'>Skills</Link></li>
          <li className='nav-link'><Link to='/skills2'>Skills2</Link></li>
          <li className='nav-link'><Link to='/projects'>Projects</Link></li>
          <li className='nav-link'><Link to='/contact'>Contact</Link></li>
          </ul>
        )
    }

    displayMobileMenu = () => {
      return (
          <ul className='hamburgerDropDown'>
            <li className='nav-link'><Link to='/' >Home</Link></li>
            <li className='nav-link'><Link to='/about'>About Me</Link></li>
            <li className='nav-link'><Link to='/skills'>Skills</Link></li>
            <li className='nav-link'><Link to='/skills2'>Skills2</Link></li>
            <li className='nav-link'><Link to='/projects'>Projects</Link></li>
            <li className='nav-link'><Link to='/contact'>Contact</Link></li>
          </ul>
        )
    }

    render() {
        return (
            <div className='navbar'>
                { this.state.open ?  this.displayMobileMenu() : null}
                {window.innerWidth > 1200 ? this.displayNavBar() : this.displayHamburgerMenu()}
            </div>
        );
    }
}

export default NavBar3;