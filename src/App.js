import React from 'react';
import Header from './components/Header/index';
import Nav from './components/Nav/index'
import CovidUpdate from './components/CovidUpdateSection/index';
import TestFinder from './components/TestFinder/index';
import VaccineFinder from './components/VaccineFinder/index.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <CovidUpdate />
      <TestFinder />
      <VaccineFinder />
    </div>
  );
}

export default App;
