import React, { useState, useEffect } from "react";
import axios from "axios";
<<<<<<< HEAD:client/src /components/CovidUpdateSection/index.js
import Iframe from "react-iframe";
import "./style.css";
=======
import "../CovidUpdateSection/style.css";
>>>>>>> 8d56ff8232261c70d54daf6f9eff1a09855bd0dc:client/src/components/CovidUpdateSection/index.js

function CovidUpdate() {
  const [covidUpdateState, setcovidUpdateState] = useState({
    headline: { main: "" },
  });

  const baseURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=coronavirus+in+the+us&api-key=hAIQqDrmbcaMwVbXpvGgflMSyUEYnZ4D";
  //https://api.nytimes.com/svc/topstories/v2/health.json?&api-key=hAIQqDrmbcaMwVbXpvGgflMSyUEYnZ4D
  //'https://api.nytimes.com/svc/topstories/v2/us.json?api-key=hAIQqDrmbcaMwVbXpvGgflMSyUEYnZ4D'
  //https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid&api-key=hAIQqDrmbcaMwVbXpvGgflMSyUEYnZ4D
  //https://api.nytimes.com/svc/search/v2/articlesearch.json?q=coronavirus+in+the+us&api-key=hAIQqDrmbcaMwVbXpvGgflMSyUEYnZ4D

  useEffect(() => {
    //make axios call here
    axios.get(baseURL).then((res) => {
      console.log();
      console.log(res);
      setcovidUpdateState(res.data.response.docs[0]);
    }, []);
  });
  return (
    <div className="card p-5 border-0">
      
      <p class="source">{covidUpdateState.source}</p>
      <p class="headline font-italic">{covidUpdateState.headline.main}</p>
      <p class="lead_paragraph">{covidUpdateState.lead_paragraph}</p>
      <p class="snippet">{covidUpdateState.snippet}</p>

      <a
        href={
          "https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        For the latest COVID-19 Updates
      </a>
    </div>
  );
}

export default CovidUpdate;
