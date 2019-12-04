import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import About from './aboutme';
import Contact from './contact';
import Resume from './resume';
import Projects from './projects';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route exact path="/portfolio" component={LandingPage}/>
    <Route  path="/aboutme" component={About}/>
    <Route  path="/contact" component={Contact}/>
    <Route  path="/projects" component={Projects}/>
    <Route  path="/resume" component={Resume}/>
  </Switch>
)

export default Main;