import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav'
import CovidUpdate from './components/CovidUpateSection';
import TestFinder from './components/TestFinder';
import VaccineFinder from './components/VaccineFinder';
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
