import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

import Catalogue from './components/pages/Catalogue';
import SignUp from './components/pages/Sign-up';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>

          <Route path='/catalogue' component={Catalogue}/>
          <Route path='/sign-up' component={SignUp}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
