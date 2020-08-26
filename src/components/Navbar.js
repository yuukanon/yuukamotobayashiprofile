// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';


// class Navbar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isNavOn:false
//     };
//     this.handleClick=this.handleClick.bind(this)
//   }

//   handleClick= (e) => {
//     e.preventDefault();
//     this.setState(prevState => ({ isNavOn: !prevState.isNavOn}))

//   }

//   render() {
//     return(
//       <>
//         <div className="burger"
//         isNavOn={this.state.isNavOn}
//         >
//           <FontAwesomeIcon 
//           onClick={this.handleClick}
//           icon={faBars} size='3x' />
//         </div>

//        <div onClick={this.handleClick} 
//         className="navbar">  
//         <ul>
//           <FontAwesomeIcon 
//           icon={faTimes} size='3x' />
//           <li><Link to='/'>Home</Link></li>
//           <li><Link to='/aboutme'>About Me</Link></li>
//           <li><Link to='/skills'>Skills</Link></li>
//           <li><Link to='/skills2'>Skills2</Link></li>
//           <li><Link to='/projects'>Projects</Link></li>
//           <li><Link to='/contact'>Contact</Link></li>
//         </ul>
//        </div>
//       </>
//     )
//   }
  

  
// }



// export default Navbar;