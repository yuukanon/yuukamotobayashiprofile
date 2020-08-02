import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/aboutme' component={AboutMe} />
        <Route path='/skills' component={Skills} />
        <Route path='/project' component={Project} />
        <Route path='/contact' component={Contact} />
      </Switch>
      </div>
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
