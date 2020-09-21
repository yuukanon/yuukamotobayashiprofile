import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Burger from './components/BurgerMenu';
import AboutMe from './components/AboutMe';
import Skills2 from './components/Skills2';
import Project from './components/Project';
import MediaProject from './components/MediaProject';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


library.add(fab, faEnvelope)

function App() {

  return (
    <Router>
      <Navbar />
      <Burger />
      <Switch>
      <div className="main-body">
        <Route exact path='/' component={Home} />
        <Route path='/aboutme' component={AboutMe} />
        <Route path='/skills' component={Skills2} />
        <Route path='/projects' component={Project} />
        <Route path='/projects' component={MediaProject} />
        <Route path='/contact' component={Contact} />
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}


export default App;
