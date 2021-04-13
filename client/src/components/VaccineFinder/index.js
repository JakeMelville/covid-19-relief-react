import React from 'react'
import Iframe from 'react-iframe'
import './style.css'

function VaccineFinderWidget() {
    return (
        <div id="vaccineContainer" class="card border-0 align-items-center">
            <p class="vaccineUpdates">
        <a href={"https://www.nytimes.com/interactive/2020/us/covid-19-vaccine-doses.html"} target="_blank">For latest COVID-19 Vaccination Updates</a>
        </p>
 

        <Iframe id="widget" url="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/vaccine-finder-widget.html" target="_blank"
        position="relative"
        width="288px"
        id="myId"
        className="myClassname"
        height="281px"
        margin-bottom="0"
        />


        
        
        </div>
    )
}

export default VaccineFinderWidget;