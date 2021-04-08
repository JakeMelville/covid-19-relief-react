import React from 'react'
import Iframe from 'react-iframe'


function VaccineFinderWidget() {
    return (
        <div>
            <p>
        <a href={"https://www.nytimes.com/interactive/2020/us/covid-19-vaccine-doses.html"} target="_blank">For latest COVID-19 Vaccination Updates</a>
        </p>
 

        <Iframe url="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/vaccine-finder-widget.html" target="_blank"
        position="absolute"
        width="50%"
        id="myId"
        className="myClassname"
        height="50%"
        styles={{height: "25px"}}
        border="0"/>


        
        
        </div>
    )
}

export default VaccineFinderWidget;