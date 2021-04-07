import React, { useState } from 'react';
import axios from 'axios';


function CovidUpdate() {
    const [CovidUpdateState, setCovidUpdateState] = useState({})

    const baseURL = 'https://api.nytimes.com/svc/topstories/v2/health.json?&api-key=hAIQqDrmbcaMwVbXpvGgflMSyUEYnZ4D'
    //https://api.nytimes.com/svc/topstories/v2/health.json?&api-key=hAIQqDrmbcaMwVbXpvGgflMSyUEYnZ4D
    //'https://api.nytimes.com/svc/topstories/v2/us.json?api-key=hAIQqDrmbcaMwVbXpvGgflMSyUEYnZ4D'
    //https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid&api-key=hAIQqDrmbcaMwVbXpvGgflMSyUEYnZ4D
    //https://api.nytimes.com/svc/search/v2/articlesearch.json?q=coronavirus+in+the+us&api-key=hAIQqDrmbcaMwVbXpvGgflMSyUEYnZ4D
    
            axios.get(baseURL)
            .then(res => {
                console.log() 
                console.log(res)

                setCovidUpdateState(res.data.results[10])

            }
            )
            return (
                <div className="card">
                    <p>testing</p>
                    <p>{CovidUpdateState.title}</p>
                    <p>{CovidUpdateState.abstract}</p>
                </div>
            ) 

            
    //return Axios.get(`${config.baseURL}`, {headers: config.headers}).then(res => {
        //return res.results[0].section[0].title['Coronavirus Briefing: What Happened Today'];
    
}

export default CovidUpdate;