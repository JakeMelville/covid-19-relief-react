import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MyProfile from './pages/MyProfile'
import TestLocator from './pages/TestLocator';
import VaccineFinder from './pages/VaccineFinder';

function App() {
  return (
    <Router>
      <div className="App">
           <Nav />
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/myprofile' component={MyProfile} />
          <Route exact path='/testlocator' component={TestLocator} />
          <Route exact path='/vaccinefinder' component={VaccineFinder} />
      </div>
    </Router>
  );
}

export default App;
