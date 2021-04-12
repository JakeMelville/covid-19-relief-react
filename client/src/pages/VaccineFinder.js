import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav/index';
import VaccineFinderWidget from '../components/VaccineFinder';
import VaccineSearch from '../components/VaccineSearch'
import API from '../utils/API';

function VaccineFinder() {
    const [vaccineState, setVaccineState] = useState('')



    function handleSubmit(event) {
        event.preventDefault();


        API.getVaccineSites()
            .then(res => {
                console.log(res.data);

                switch (vaccineState) {
                    case 'AL':
                        return console.log(res.data[0]);
                }
            
            })
    }


    console.log(vaccineState);

    return (
        <div>
            <Nav />
            <VaccineFinderWidget />
            <VaccineSearch
                vaccineState={vaccineState}
                setVaccineState={setVaccineState}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}


export default VaccineFinder;