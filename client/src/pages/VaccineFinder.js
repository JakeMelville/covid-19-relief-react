import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav/index';
import VaccineFinderWidget from '../components/VaccineFinder';
import API from '../utils/API';

function VaccineFinder() {
    const [vaccineState, setVaccineState] = useState('')

    


    API.getVaccineSites()
        .then(res => {
            console.log(res);


        })





    return (
        <div>
            <Nav />
            <VaccineFinderWidget />
        </div>
    )
}


export default VaccineFinder;