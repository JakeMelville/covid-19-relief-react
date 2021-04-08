import React from 'react'
import Iframe from 'react-iframe'


function VaccineFinder() {
    return (
        <Iframe url="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/vaccine-finder-widget.html"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    )
}

export default VaccineFinder;