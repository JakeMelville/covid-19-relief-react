import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CovidUpdateSection/style.css'



function CovidUpdate() {
    
    const [covidUpdateState, setcovidUpdateState] = useState({
        headline: { main: "" }
    })

    const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=coronavirus+in+the+us&api-key=hAIQqDrmbcaMwVbXpvGgflMSyUEYnZ4D'
    //https://api.nytimes.com/svc/topstories/v2/health.json?&api-key=hAIQqDrmbcaMwVbXpvGgflMSyUEYnZ4D
    //'https://api.nytimes.com/svc/topstories/v2/us.json?api-key=hAIQqDrmbcaMwVbXpvGgflMSyUEYnZ4D'
    //https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid&api-key=hAIQqDrmbcaMwVbXpvGgflMSyUEYnZ4D
    //https://api.nytimes.com/svc/search/v2/articlesearch.json?q=coronavirus+in+the+us&api-key=hAIQqDrmbcaMwVbXpvGgflMSyUEYnZ4D

    useEffect(() => {
        //make axios call here
        axios.get(baseURL)
            .then(res => {
                console.log() 
                console.log(res)
                setcovidUpdateState(res.data.response.docs[0])

      }, [])            

                

            }
            )
            return (
                <div className="card">
                    <p class="source">{covidUpdateState.source}</p>
                    <p>{covidUpdateState.headline.main}</p>
                    <p>{covidUpdateState.lead_paragraph}</p>
                    <p>{covidUpdateState.snippet}</p>
                    
                    
                </div>
            ) 

            
    //return Axios.get(`${config.baseURL}`, {headers: config.headers}).then(res => {
        //return res.results[0].section[0].title['Coronavirus Briefing: What Happened Today'];
    
}

export default CovidUpdate;