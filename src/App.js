import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MyProfile from './pages/MyProfile'
import TestLocator from './pages/TestLocator';
import VaccineFinder from './pages/VaccineFinder';
import './App.css';
import useToken from './components/App/useToken';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const token = getToken();

  if(!token) {
    return <Signup setToken={setToken} />
  }

  return (
    <Router>
      <div className="App">
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
