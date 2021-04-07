import React, { useState } from 'react';
import axios from 'axios';
import TestFinder from '../components/TestFinder/index';
import Nav from '../components/Nav/index';

function TestLocator() {
  const [locationState, setLocationState] = useState('')
  const [latState, setLatState] = useState('')
  const [lngState, setLngState] = useState('')
  const [testingSite1, setTestingSite1] = useState('')
  const [testingSite2, setTestingSite2] = useState('')
  const [testingSite3, setTestingSite3] = useState('')
  const [testingSite4, setTestingSite4] = useState('')
  const [testingSite5, setTestingSite5] = useState('')
  const [mapSrc, setMapSrc] = useState('')


  let latLngDataUrl = 'http://www.mapquestapi.com/geocoding/v1/address?key=WFU3qGtFSrPpKOpC8vhpd3bfXKHEP4My&location=' + locationState;
  axios.get(latLngDataUrl)
    .then(res => {
      // console.log(res.data.results);
      setLatState(res.data.results[0].locations[0].displayLatLng.lat);
      setLngState(res.data.results[0].locations[0].displayLatLng.lng);

    })
    .catch(err => console.log('line 34', err));

  let testingSitesUrl = `https://discover.search.hereapi.com/v1/discover?apikey=2E2hXtlLTixuNk2K6LWH7tzmKtQscKlf74M2DC_PX4A&q=Covid&at=${latState},${lngState}&limit=5`
  axios.get(testingSitesUrl)
    .then(res => {
      // console.log(res.data);  
      setTestingSite1('1. ' + res.data.items[0].address.label);
      setTestingSite2('2. ' + res.data.items[1].address.label);
      setTestingSite3('3. ' + res.data.items[2].address.label);
      setTestingSite4('4. ' + res.data.items[3].address.label);
      setTestingSite5('5. ' + res.data.items[4].address.label);
      setMapSrc(`https://open.mapquestapi.com/staticmap/v5/map?key=WFU3qGtFSrPpKOpC8vhpd3bfXKHEP4My&banner=Covid+19+Test+Sights|top&size=400,400&zoom=10&locations=${res.data.items[0].access[0].lat},${res.data.items[0].access[0].lng}|marker-1||${res.data.items[1].access[0].lat},${res.data.items[1].access[0].lng}|marker-2||${res.data.items[2].access[0].lat},${res.data.items[2].access[0].lng}|marker-3||${res.data.items[3].access[0].lat},${res.data.items[3].access[0].lng}|marker-4||${res.data.items[4].access[0].lat},${res.data.items[4].access[0].lng}|marker-5||`)
    })
    .catch(err => console.log('line 47', err));



  const handleSubmit = (event) => {
    event.preventDefault();
    setLocationState(event.target.value)
  }

  return (
    <div>
      <Nav />
      <TestFinder
        handleSubmit={handleSubmit}
        results={locationState}
      />
      <div className='row text-left pl-5 justify-content-center'>
        <ul className='col-4'>
          <li className='p-2'>{testingSite1}</li>
          <li className='p-2'>{testingSite2}</li>
          <li className='p-2'>{testingSite3}</li>
          <li className='p-2'>{testingSite4}</li>
          <li className='p-2'>{testingSite5}</li>
        </ul>
        <img className='col-4' src={mapSrc} alt='map'/>
      </div>
    </div>
  )
}


export default TestLocator;



