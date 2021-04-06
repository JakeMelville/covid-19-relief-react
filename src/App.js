import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Header from './components/Header/index';
import Nav from './components/Nav/index';
// import CovidUpdate from './components/CovidUpdateSection/index';
// import TestFinder from './components/TestFinder/index';
// import VaccineFinder from './components/VaccineFinder/index.js';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MyProfile from './pages/MyProfile'
import TestLocator from './pages/TestLocator';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/myprofile' component={MyProfile} />
          <Route exact path='/testlocator' component={TestLocator} />
      </div>
    </Router>
  );
}

export default App;
