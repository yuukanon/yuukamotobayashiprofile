import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Skills2 from './components/Skills2';
import Project from './components/Project2';
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


export default App;
