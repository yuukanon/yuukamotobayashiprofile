import React, { useState }from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Burger from './components/Burger';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Skills2 from './components/Skills2';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


library.add(fab, faEnvelope)

function App() {
  const [open, setOpen] = useState(false);
  
  return (
    <Router>
        <Burger open={open} setOpen={setOpen} />
        <Navbar open={open} setOpen={setOpen} />
        <Switch>
          <Route exact path='/' component={Home} />
          <div className="main-body">
            <Route path='/aboutme' component={AboutMe} />
            <Route path='/skills' component={Skills} />
            <Route path='/skills2' component={Skills2} />
            <Route path='/project' component={Project} />
            <Route path='/contact' component={Contact} />
            </div>
          </Switch>
        <Footer />
    </Router>
  );
}

const Home = () => {
  return(
     <header>
        <img src="https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80" alt="" />
        <div className='name'>
          <h3>Hello, I am Yuuka Motobayashi and</h3>
          <h1>Project Management Professinal, Front End Web Developer</h1>
        </div>
      </header>
      
  )
}


export default App;
