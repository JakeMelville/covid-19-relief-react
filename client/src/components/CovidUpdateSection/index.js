import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CovidUpdateSection/style.css";

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
      <div>
        <p class="source">{covidUpdateState.source}</p>
        <p class="headline font-italic">{covidUpdateState.headline.main}</p>
        <p class="lead_paragraph">{covidUpdateState.lead_paragraph}</p>
        <p class="snippet">{covidUpdateState.snippet}</p>

          <a
            href={
              "https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html"
            }
            target="_blank"
          >
            For the latest COVID-19 Updates
          </a>
      </div>
      <div>
        <form class="float-sm-right">
          <div class="form-group row">

          <label for="inputPassword2" class="sr-only">Search COVID or Coronavirus</label>

          <input type="password" class="form-control" id="inputPassword2" placeholder="Search COVID or Coronavirus"></input>
          
          <button type="submit" class="btn btn-primary mb-2" onclick="showArticles()">Search NY Times Articles</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CovidUpdate;
