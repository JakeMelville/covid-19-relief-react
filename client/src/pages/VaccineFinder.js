import React from 'react';
import Nav from '../components/Nav/index';
import VaccineFinderWidget from '../components/VaccineFinder';

function VaccineFinder() {
    return (
        <div>
            <Nav />
            <VaccineFinderWidget />
        </div>
    )
}

export default VaccineFinder;