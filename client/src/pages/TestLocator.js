import React, { useState, useEffect } from 'react';
import TestFinder from '../components/TestFinder/index';
import Nav from '../components/Nav/index';
import API from '../utils/API';

function TestLocator() {
  const [locationState, setLocationState] = useState('')
  const [latLngState, setLatLngState] = useState('')

  const [testingSite1, setTestingSite1] = useState('')
  const [testingSite2, setTestingSite2] = useState('')
  const [testingSite3, setTestingSite3] = useState('')
  const [testingSite4, setTestingSite4] = useState('')
  const [testingSite5, setTestingSite5] = useState('')
  const [mapSrc, setMapSrc] = useState('')

  const [link1, setLink1] = useState('')
  const [link2, setLink2] = useState('')
  const [link3, setLink3] = useState('')
  const [link4, setLink4] = useState('')
  const [link5, setLink5] = useState('')

  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [number3, setNumber3] = useState('')
  const [number4, setNumber4] = useState('')
  const [number5, setNumber5] = useState('')


  useEffect(() => {
    if (!latLngState) {
      return;
    }
    API.getTestingSites(latLngState)
      .then(res => {
        // console.log(res.data);  
        setTestingSite1('1. ' + res.data.items[0].address.label);
        setLink1('Website Link: ' + res.data.items[0].contacts[0].www[0].value);
        setNumber1('Phone Number: ' + res.data.items[0].contacts[0].phone[0].value);

        setTestingSite2('2. ' + res.data.items[1].address.label);
        setLink2('Website Link: ' + res.data.items[1].contacts[0].www[0].value);
        setNumber2('Phone Number: ' + res.data.items[1].contacts[0].phone[0].value);

        setTestingSite3('3. ' + res.data.items[2].address.label);
        setLink3('Website Link: ' + res.data.items[2].contacts[0].www[0].value);
        setNumber3('Phone Number: ' + res.data.items[2].contacts[0].phone[0].value);

        setTestingSite4('4. ' + res.data.items[3].address.label);
        setLink4('Website Link: ' + res.data.items[3].contacts[0].www[0].value);
        setNumber4('Phone Number: ' + res.data.items[3].contacts[0].phone[0].value);

        setTestingSite5('5. ' + res.data.items[4].address.label);
        setLink5('Website Link: ' + res.data.items[4].contacts[0].www[0].value);
        setNumber5('Phone Number: ' + res.data.items[4].contacts[0].phone[0].value);

        setMapSrc(`https://open.mapquestapi.com/staticmap/v5/map?key=WFU3qGtFSrPpKOpC8vhpd3bfXKHEP4My&banner=Covid+19+Test+Sights|top&size=400,400&zoom=10&locations=${res.data.items[0].access[0].lat},${res.data.items[0].access[0].lng}|marker-1||${res.data.items[1].access[0].lat},${res.data.items[1].access[0].lng}|marker-2||${res.data.items[2].access[0].lat},${res.data.items[2].access[0].lng}|marker-3||${res.data.items[3].access[0].lat},${res.data.items[3].access[0].lng}|marker-4||${res.data.items[4].access[0].lat},${res.data.items[4].access[0].lng}|marker-5||`)
      })
      .catch(err => console.log(err));

  }, [latLngState]);


  function handleSubmit(event) {
    event.preventDefault();
    console.log('handlesubmit runs');
    // console.log(locationState);

    API.getLatLng(locationState)
      .then(res => {
        console.log('line 20 location', locationState);
        console.log(res.data);
        setLatLngState(`${res.data.results[0].locations[0].displayLatLng.lat},${res.data.results[0].locations[0].displayLatLng.lng}`);
      })
      .catch(err => console.log(err));
  }


  // function addBtn() {
  //   console.log('addbtn works');
  //   document.querySelector('.btn').style.removeProperty('display')
  // }

  return (
    <div>
      <Nav />
      <TestFinder
        handleSubmit={handleSubmit}
        results={locationState}
        setLocationState={setLocationState}

        testingSite1={testingSite1}
        link1={link1}
        number1={number1}

        testingSite2={testingSite2}
        link2={link2}
        number2={number2}

        testingSite3={testingSite3}
        link3={link3}
        number3={number3}

        testingSite4={testingSite4}
        link4={link4}
        number4={number4}

        testingSite5={testingSite5}
        link5={link5}
        number5={number5}

        mapSrc={mapSrc}
      />
    </div>
  );
};



export default TestLocator;


