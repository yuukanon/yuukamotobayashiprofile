import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Contact from './components/Contact';


function App() {
  return (
    <div>
    <Home />
    <Switch>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/aboutme' component={AboutMe} />
      <Route path='/contact' component={Contact} />
    </Switch>

    </div>
  );
}

export default App;
