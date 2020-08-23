import React from 'react';
import { Link } from 'react-router-dom';
import Burger from './Burger';

class Navbar2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavShown: false
    }
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event) {
    event.preventDefault();
    this.setState(prevState => ({isNavShown: !prevState.isNavShown}));
  }

  render() {
    return(
        <>
         <Burger 
         isNavShown={this.state.isNavShown}/>
          <div onClick={this.handleClick} className="navbar">  
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
}


export default Navbar2;