import React from 'react'
import Iframe from 'react-iframe'
import './style.css'

function VaccineFinderWidget() {
    return (
        <div id="vaccineContainer" classNmae="card border-0 align-items-center">
            <p className="vaccineUpdates">
        <a href={"https://www.nytimes.com/interactive/2020/us/covid-19-vaccine-doses.html"} target="_blank" rel="noopener noreferrer">For latest COVID-19 Vaccination Updates</a>
        </p>
 

        <Iframe id="widget" url="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/vaccine-finder-widget.html" target="_blank"
        position="center"
        width="288px"
        className="myClassname"
        height="281px"
        margin-bottom="0"
        />


        
        
        </div>
    )
}

export default VaccineFinderWidget;