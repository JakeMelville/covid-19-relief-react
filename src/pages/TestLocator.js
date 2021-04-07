import React, { useState } from 'react';
import TestFinder from '../components/TestFinder/index';
import Nav from '../components/Nav/index';
import API from '../utils/API';

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


  API.getLatLng(locationState)
    .then(res => {
      console.log('line 20 location', locationState);
      console.log(res.data);
      setLatState(res.data.results[0].locations[0].displayLatLng.lat);
      setLngState(res.data.results[0].locations[0].displayLatLng.lng);


      API.getTestingSites(latState, lngState)
        .then(res => {
          // console.log(res.data);  
          setTestingSite1('1. ' + res.data.items[0].address.label);
          setTestingSite2('2. ' + res.data.items[1].address.label);
          setTestingSite3('3. ' + res.data.items[2].address.label);
          setTestingSite4('4. ' + res.data.items[3].address.label);
          setTestingSite5('5. ' + res.data.items[4].address.label);
          setMapSrc(`https://open.mapquestapi.com/staticmap/v5/map?key=WFU3qGtFSrPpKOpC8vhpd3bfXKHEP4My&banner=Covid+19+Test+Sights|top&size=400,400&zoom=10&locations=${res.data.items[0].access[0].lat},${res.data.items[0].access[0].lng}|marker-1||${res.data.items[1].access[0].lat},${res.data.items[1].access[0].lng}|marker-2||${res.data.items[2].access[0].lat},${res.data.items[2].access[0].lng}|marker-3||${res.data.items[3].access[0].lat},${res.data.items[3].access[0].lng}|marker-4||${res.data.items[4].access[0].lat},${res.data.items[4].access[0].lng}|marker-5||`)
        })
    })
    .catch(err => console.log('line 37', err));

  const handleKeyPress = (event) => {
    event.preventDefault();
    if (event.key === 'Enter') {
      setLocationState(event.target.value)
      console.log('loc state', locationState);

    }
  }

  return (
    <div>
      <Nav />
      <TestFinder
        handleKeyPress={handleKeyPress}
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
        <img className='col-4' src={mapSrc} alt='map' />
      </div>
    </div>
  )
}


export default TestLocator;



