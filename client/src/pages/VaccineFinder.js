import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav/index';
import VaccineFinderWidget from '../components/VaccineFinder';
import VaccineSearch from '../components/VaccineSearch';
import ProviderCard from '../components/ProviderCard/index.js'
import API from '../utils/API';

function VaccineFinder() {

    const [vaccineState, setVaccineState] = useState('')

    const [nameState, setNameState] = useState('')
    const [brandState, setBrandState] = useState('')
    const [brandWebsite, setBrandWebsite] = useState('')
    const [numLocations, setNumLocations] = useState('')

    const [brand1State, setBrand1State] = useState('')
    const [brand1Website, setBrand1Website] = useState('')
    const [num1Locations, setNum1Locations] = useState('')

    const [brand2State, setBrand2State] = useState('')
    const [brand2Website, setBrand2Website] = useState('')
    const [num2Locations, setNum2Locations] = useState('')

    const [brand3State, setBrand3State] = useState('')
    const [brand3Website, setBrand3Website] = useState('')
    const [num3Locations, setNum3Locations] = useState('')

    const [brand4State, setBrand4State] = useState('')
    const [brand4Website, setBrand4Website] = useState('')
    const [num4Locations, setNum4Locations] = useState('')

    const [brand5State, setBrand5State] = useState('')
    const [brand5Website, setBrand5Website] = useState('')
    const [num5Locations, setNum5Locations] = useState('')

    const [brand6State, setBrand6State] = useState('')
    const [brand6Website, setBrand6Website] = useState('')
    const [num6Locations, setNum6Locations] = useState('')

    const [brand7State, setBrand7State] = useState('')
    const [brand7Website, setBrand7Website] = useState('')
    const [num7Locations, setNum7Locations] = useState('')

    const [brand8State, setBrand8State] = useState('')
    const [brand8Website, setBrand8Website] = useState('')
    const [num8Locations, setNum8Locations] = useState('')

    const [brand9State, setBrand9State] = useState('')
    const [brand9Website, setBrand9Website] = useState('')
    const [num9Locations, setNum9Locations] = useState('')

    const [brand10State, setBrand10State] = useState('')
    const [brand10Website, setBrand10Website] = useState('')
    const [num10Locations, setNum10Locations] = useState('')

    const [brand11State, setBrand11State] = useState('')
    const [brand11Website, setBrand11Website] = useState('')
    const [num11Locations, setNum11Locations] = useState('')

    const [brand12State, setBrand12State] = useState('')
    const [brand12Website, setBrand12Website] = useState('')
    const [num12Locations, setNum12Locations] = useState('')

    const [brand13State, setBrand13State] = useState('')
    const [brand13Website, setBrand13Website] = useState('')
    const [num13Locations, setNum13Locations] = useState('')

    const [brand14State, setBrand14State] = useState('')
    const [brand14Website, setBrand14Website] = useState('')
    const [num14Locations, setNum14Locations] = useState('')

    const [brand15State, setBrand15State] = useState('')
    const [brand15Website, setBrand15Website] = useState('')
    const [num15Locations, setNum15Locations] = useState('')

    const [brand16State, setBrand16State] = useState('')
    const [brand16Website, setBrand16Website] = useState('')
    const [num16Locations, setNum16Locations] = useState('')

    const [brand17State, setBrand17State] = useState('')
    const [brand17Website, setBrand17Website] = useState('')
    const [num17Locations, setNum17Locations] = useState('')

    const [brand18State, setBrand18State] = useState('')
    const [brand18Website, setBrand18Website] = useState('')
    const [num18Locations, setNum18Locations] = useState('')

    const [brand19State, setBrand19State] = useState('')
    const [brand19Website, setBrand19Website] = useState('')
    const [num19Locations, setNum19Locations] = useState('')


    function hideCards() {
        if (brandState === '') {
            document.getElementById('#brandNameCard').style.display = 'none'
        }
        if (brand1State === '') {
            document.getElementById('#brandNameCard').style.display = 'none'
        }
        if (brand2State === '') {
            document.getElementById('#brandNameCard').style.display = 'none'
        }
        if (brand3State === '') {
            document.getElementById('#brandNameCard').style.display = 'none'
        }
        if (brand4State === '') {
            document.getElementById('#brandNameCard').style.display = 'none'
        }
        if (brand5State === '') {
            document.getElementById('#brandNameCard').style.display = 'none'
        }
        if (brand6State === '') {
            document.getElementById('#brandNameCard').style.display = 'none'
        }
        if (brand7State === '') {
            document.getElementById('#brandNameCard').style.display = 'none'
        }
        if (brand8State === '') {
            document.getElementById('#brandNameCard').style.display = 'none'
        }
        if (brand9State === '') {
            document.getElementById('#brandNameCard').style.display = 'none'
        }
        if (brand10State === '') {
            document.getElementById('#brandNameCard').style.display = 'none'
        }
        if (brand11State === '') {
            document.getElementById('#brandNameCard').style.display = 'none'
        }
        if (brand12State === '') {
            document.getElementById('#brandNameCard').style.display = 'none'
        }
        if (brand13State === '') {
            document.getElementById('#brandNameCard').style.display = 'none'
        }
        if (brand14State === '') {
            document.getElementById('#brandNameCard').style.display = 'none'
        }
        if (brand15State === '') {
            document.getElementById('#brandNameCard').style.display = 'none'
        }
        if (brand16State === '') {
            document.getElementById('#brandNameCard').style.display = 'none'
        }
        if (brand17State === '') {
            document.getElementById('#brandNameCard').style.display = 'none'
        }
        if (brand18State === '') {
            document.getElementById('#brandNameCard').style.display = 'none'
        }
        if (brand19State === '') {
            document.getElementById('#brandNameCard').style.display = 'none'
        }
    }

    function resetForm() {
        this.setState(this.baseState);
    }

    function handleSubmit(event) {
        event.preventDefault();
        // hideCards()
        document.getElementById('submitBtn').style.display = 'none'
        document.getElementById('resetBtn').style.display = 'block'
        document.getElementById('inputForm').style.display = 'none'
        document.getElementById('headerBrands').style.display = 'none'




        API.getVaccineSites()
            .then(res => {
                console.log(res.data);
                switch (vaccineState) {
                    case 'AL':
                        setNameState(res.data[0].name)

                        setBrandState(res.data[0].provider_brands[0].name)
                        setBrandWebsite(res.data[0].provider_brands[0].url)
                        setNumLocations(res.data[0].provider_brands[0].location_count)

                        setBrand1State(res.data[0].provider_brands[1].name)
                        setBrand1Website(res.data[0].provider_brands[1].url)
                        setNum1Locations(res.data[0].provider_brands[1].location_count)

                        setBrand2State(res.data[0].provider_brands[2].name)
                        setBrand2Website(res.data[0].provider_brands[2].url)
                        setNum2Locations(res.data[0].provider_brands[2].location_count)

                        setBrand3State(res.data[0].provider_brands[3].name)
                        setBrand3Website(res.data[0].provider_brands[3].url)
                        setNum3Locations(res.data[0].provider_brands[3].location_count)

                        setBrand4State(res.data[0].provider_brands[4].name)
                        setBrand4Website(res.data[0].provider_brands[4].url)
                        setNum4Locations(res.data[0].provider_brands[4].location_count)

                        setBrand5State(res.data[0].provider_brands[5].name)
                        setBrand5Website(res.data[0].provider_brands[5].url)
                        setNum5Locations(res.data[0].provider_brands[5].location_count)

                        setBrand6State(res.data[0].provider_brands[6].name)
                        setBrand6Website(res.data[0].provider_brands[6].url)
                        setNum6Locations(res.data[0].provider_brands[6].location_count)

                        setBrand7State(res.data[0].provider_brands[7].name)
                        setBrand7Website(res.data[0].provider_brands[7].url)
                        setNum7Locations(res.data[0].provider_brands[7].location_count)

                        return;
                    case 'AK':
                        setNameState(res.data[1].name)

                        setBrandState(res.data[1].provider_brands[0].name)
                        setBrandWebsite(res.data[1].provider_brands[0].url)
                        setNumLocations(res.data[1].provider_brands[0].location_count)

                        setBrand1State(res.data[1].provider_brands[1].name)
                        setBrand1Website(res.data[1].provider_brands[1].url)
                        setNum1Locations(res.data[1].provider_brands[1].location_count)

                        setBrand2State(res.data[1].provider_brands[2].name)
                        setBrand2Website(res.data[1].provider_brands[2].url)
                        setNum2Locations(res.data[1].provider_brands[2].location_count)

                        setBrand3State(res.data[1].provider_brands[3].name)
                        setBrand3Website(res.data[1].provider_brands[3].url)
                        setNum3Locations(res.data[1].provider_brands[3].location_count)

                        setBrand4State(res.data[1].provider_brands[4].name)
                        setBrand4Website(res.data[1].provider_brands[4].url)
                        setNum4Locations(res.data[1].provider_brands[4].location_count)

                        setBrand5State(res.data[1].provider_brands[5].name)
                        setBrand5Website(res.data[1].provider_brands[5].url)
                        setNum5Locations(res.data[1].provider_brands[5].location_count)

                        setBrand6State(res.data[1].provider_brands[6].name)
                        setBrand6Website(res.data[1].provider_brands[6].url)
                        setNum6Locations(res.data[1].provider_brands[6].location_count)

                        setBrand7State(res.data[1].provider_brands[7].name)
                        setBrand7Website(res.data[1].provider_brands[7].url)
                        setNum7Locations(res.data[1].provider_brands[7].location_count)

                        setBrand8State(res.data[1].provider_brands[8].name)
                        setBrand8Website(res.data[1].provider_brands[8].url)
                        setNum8Locations(res.data[1].provider_brands[8].location_count)

                        return;
                    case 'AZ':
                        setNameState(res.data[2].name)

                        setBrandState(res.data[2].provider_brands[0].name)
                        setBrandWebsite(res.data[2].provider_brands[0].url)
                        setNumLocations(res.data[2].provider_brands[0].location_count)

                        setBrand1State(res.data[2].provider_brands[1].name)
                        setBrand1Website(res.data[2].provider_brands[1].url)
                        setNum1Locations(res.data[2].provider_brands[1].location_count)

                        setBrand2State(res.data[2].provider_brands[2].name)
                        setBrand2Website(res.data[2].provider_brands[2].url)
                        setNum2Locations(res.data[2].provider_brands[2].location_count)

                        setBrand3State(res.data[2].provider_brands[3].name)
                        setBrand3Website(res.data[2].provider_brands[3].url)
                        setNum3Locations(res.data[2].provider_brands[3].location_count)

                        setBrand4State(res.data[2].provider_brands[4].name)
                        setBrand4Website(res.data[2].provider_brands[4].url)
                        setNum4Locations(res.data[2].provider_brands[4].location_count)

                        setBrand5State(res.data[2].provider_brands[5].name)
                        setBrand5Website(res.data[2].provider_brands[5].url)
                        setNum5Locations(res.data[2].provider_brands[5].location_count)

                        setBrand6State(res.data[2].provider_brands[6].name)
                        setBrand6Website(res.data[2].provider_brands[6].url)
                        setNum6Locations(res.data[2].provider_brands[6].location_count)

                        setBrand7State(res.data[2].provider_brands[7].name)
                        setBrand7Website(res.data[2].provider_brands[7].url)
                        setNum7Locations(res.data[2].provider_brands[7].location_count)

                        setBrand8State(res.data[2].provider_brands[8].name)
                        setBrand8Website(res.data[2].provider_brands[8].url)
                        setNum8Locations(res.data[2].provider_brands[8].location_count)

                        setBrand9State(res.data[2].provider_brands[9].name)
                        setBrand9Website(res.data[2].provider_brands[9].url)
                        setNum9Locations(res.data[2].provider_brands[9].location_count)

                        setBrand10State(res.data[2].provider_brands[10].name)
                        setBrand10Website(res.data[2].provider_brands[10].url)
                        setNum10Locations(res.data[2].provider_brands[10].location_count)

                        setBrand11State(res.data[2].provider_brands[11].name)
                        setBrand11Website(res.data[2].provider_brands[11].url)
                        setNum11Locations(res.data[2].provider_brands[11].location_count)

                        setBrand12State(res.data[2].provider_brands[12].name)
                        setBrand12Website(res.data[2].provider_brands[12].url)
                        setNum12Locations(res.data[2].provider_brands[12].location_count)
                        return
                    case 'AR':
                        setNameState(res.data[3].name)

                        setBrandState(res.data[3].provider_brands[0].name)
                        setBrandWebsite(res.data[3].provider_brands[0].url)
                        setNumLocations(res.data[3].provider_brands[0].location_count)

                        setBrand1State(res.data[3].provider_brands[1].name)
                        setBrand1Website(res.data[3].provider_brands[1].url)
                        setNum1Locations(res.data[3].provider_brands[1].location_count)

                        setBrand2State(res.data[3].provider_brands[2].name)
                        setBrand2Website(res.data[3].provider_brands[2].url)
                        setNum2Locations(res.data[3].provider_brands[2].location_count)

                        setBrand3State(res.data[3].provider_brands[3].name)
                        setBrand3Website(res.data[3].provider_brands[3].url)
                        setNum3Locations(res.data[3].provider_brands[3].location_count)

                        setBrand4State(res.data[3].provider_brands[4].name)
                        setBrand4Website(res.data[3].provider_brands[4].url)
                        setNum4Locations(res.data[3].provider_brands[4].location_count)

                        setBrand5State(res.data[3].provider_brands[5].name)
                        setBrand5Website(res.data[3].provider_brands[5].url)
                        setNum5Locations(res.data[3].provider_brands[5].location_count)

                        setBrand6State(res.data[3].provider_brands[6].name)
                        setBrand6Website(res.data[3].provider_brands[6].url)
                        setNum6Locations(res.data[3].provider_brands[6].location_count)

                        setBrand7State(res.data[3].provider_brands[7].name)
                        setBrand7Website(res.data[3].provider_brands[7].url)
                        setNum7Locations(res.data[3].provider_brands[7].location_count)

                        setBrand8State(res.data[3].provider_brands[8].name)
                        setBrand8Website(res.data[3].provider_brands[8].url)
                        setNum8Locations(res.data[3].provider_brands[8].location_count)

                        setBrand9State(res.data[3].provider_brands[9].name)
                        setBrand9Website(res.data[3].provider_brands[9].url)
                        setNum9Locations(res.data[3].provider_brands[9].location_count)
                        return;
                    case 'CA':
                        setNameState(res.data[4].name)

                        setBrandState(res.data[4].provider_brands[0].name)
                        setBrandWebsite(res.data[4].provider_brands[0].url)
                        setNumLocations(res.data[4].provider_brands[0].location_count)

                        setBrand1State(res.data[4].provider_brands[1].name)
                        setBrand1Website(res.data[4].provider_brands[1].url)
                        setNum1Locations(res.data[4].provider_brands[1].location_count)

                        setBrand2State(res.data[4].provider_brands[2].name)
                        setBrand2Website(res.data[4].provider_brands[2].url)
                        setNum2Locations(res.data[4].provider_brands[2].location_count)

                        setBrand3State(res.data[4].provider_brands[3].name)
                        setBrand3Website(res.data[4].provider_brands[3].url)
                        setNum3Locations(res.data[4].provider_brands[3].location_count)

                        setBrand4State(res.data[4].provider_brands[4].name)
                        setBrand4Website(res.data[4].provider_brands[4].url)
                        setNum4Locations(res.data[4].provider_brands[4].location_count)

                        setBrand5State(res.data[4].provider_brands[5].name)
                        setBrand5Website(res.data[4].provider_brands[5].url)
                        setNum5Locations(res.data[4].provider_brands[5].location_count)

                        setBrand6State(res.data[4].provider_brands[6].name)
                        setBrand6Website(res.data[4].provider_brands[6].url)
                        setNum6Locations(res.data[4].provider_brands[6].location_count)

                        setBrand7State(res.data[4].provider_brands[7].name)
                        setBrand7Website(res.data[4].provider_brands[7].url)
                        setNum7Locations(res.data[4].provider_brands[7].location_count)

                        setBrand8State(res.data[4].provider_brands[8].name)
                        setBrand8Website(res.data[4].provider_brands[8].url)
                        setNum8Locations(res.data[4].provider_brands[8].location_count)

                        setBrand9State(res.data[4].provider_brands[9].name)
                        setBrand9Website(res.data[4].provider_brands[9].url)
                        setNum9Locations(res.data[4].provider_brands[9].location_count)

                        setBrand10State(res.data[4].provider_brands[10].name)
                        setBrand10Website(res.data[4].provider_brands[10].url)
                        setNum10Locations(res.data[4].provider_brands[10].location_count)

                        setBrand11State(res.data[4].provider_brands[11].name)
                        setBrand11Website(res.data[4].provider_brands[11].url)
                        setNum11Locations(res.data[4].provider_brands[11].location_count)

                        setBrand12State(res.data[4].provider_brands[12].name)
                        setBrand12Website(res.data[4].provider_brands[12].url)
                        setNum12Locations(res.data[4].provider_brands[12].location_count)

                        setBrand13State(res.data[4].provider_brands[13].name)
                        setBrand13Website(res.data[4].provider_brands[13].url)
                        setNum13Locations(res.data[4].provider_brands[13].location_count)

                        setBrand14State(res.data[4].provider_brands[14].name)
                        setBrand14Website(res.data[4].provider_brands[14].url)
                        setNum14Locations(res.data[4].provider_brands[14].location_count)

                        setBrand15State(res.data[4].provider_brands[15].name)
                        setBrand15Website(res.data[4].provider_brands[15].url)
                        setNum15Locations(res.data[4].provider_brands[15].location_count)

                        setBrand16State(res.data[4].provider_brands[16].name)
                        setBrand16Website(res.data[4].provider_brands[16].url)
                        setNum16Locations(res.data[4].provider_brands[16].location_count)

                        setBrand17State(res.data[4].provider_brands[17].name)
                        setBrand17Website(res.data[4].provider_brands[17].url)
                        setNum17Locations(res.data[4].provider_brands[17].location_count)

                        setBrand18State(res.data[4].provider_brands[18].name)
                        setBrand18Website(res.data[4].provider_brands[18].url)
                        setNum18Locations(res.data[4].provider_brands[18].location_count)
                        return;
                    case 'CO':
                        setNameState(res.data[5].name)

                        setBrandState(res.data[5].provider_brands[0].name)
                        setBrandWebsite(res.data[5].provider_brands[0].url)
                        setNumLocations(res.data[5].provider_brands[0].location_count)

                        setBrand1State(res.data[5].provider_brands[1].name)
                        setBrand1Website(res.data[5].provider_brands[1].url)
                        setNum1Locations(res.data[5].provider_brands[1].location_count)

                        setBrand2State(res.data[5].provider_brands[2].name)
                        setBrand2Website(res.data[5].provider_brands[2].url)
                        setNum2Locations(res.data[5].provider_brands[2].location_count)

                        setBrand3State(res.data[5].provider_brands[3].name)
                        setBrand3Website(res.data[5].provider_brands[3].url)
                        setNum3Locations(res.data[5].provider_brands[3].location_count)

                        setBrand4State(res.data[5].provider_brands[4].name)
                        setBrand4Website(res.data[5].provider_brands[4].url)
                        setNum4Locations(res.data[5].provider_brands[4].location_count)

                        setBrand5State(res.data[5].provider_brands[5].name)
                        setBrand5Website(res.data[5].provider_brands[5].url)
                        setNum5Locations(res.data[5].provider_brands[5].location_count)

                        setBrand6State(res.data[5].provider_brands[6].name)
                        setBrand6Website(res.data[5].provider_brands[6].url)
                        setNum6Locations(res.data[5].provider_brands[6].location_count)

                        setBrand7State(res.data[5].provider_brands[7].name)
                        setBrand7Website(res.data[5].provider_brands[7].url)
                        setNum7Locations(res.data[5].provider_brands[7].location_count)

                        setBrand8State(res.data[5].provider_brands[8].name)
                        setBrand8Website(res.data[5].provider_brands[8].url)
                        setNum8Locations(res.data[5].provider_brands[8].location_count)

                        setBrand9State(res.data[5].provider_brands[9].name)
                        setBrand9Website(res.data[5].provider_brands[9].url)
                        setNum9Locations(res.data[5].provider_brands[9].location_count)

                        setBrand10State(res.data[5].provider_brands[10].name)
                        setBrand10Website(res.data[5].provider_brands[10].url)
                        setNum10Locations(res.data[5].provider_brands[10].location_count)

                        setBrand11State(res.data[5].provider_brands[11].name)
                        setBrand11Website(res.data[5].provider_brands[11].url)
                        setNum11Locations(res.data[5].provider_brands[11].location_count)

                        setBrand12State(res.data[5].provider_brands[12].name)
                        setBrand12Website(res.data[5].provider_brands[12].url)
                        setNum12Locations(res.data[5].provider_brands[12].location_count)

                        setBrand13State(res.data[5].provider_brands[13].name)
                        setBrand13Website(res.data[5].provider_brands[13].url)
                        setNum13Locations(res.data[5].provider_brands[13].location_count)

                        setBrand14State(res.data[5].provider_brands[14].name)
                        setBrand14Website(res.data[5].provider_brands[14].url)
                        setNum14Locations(res.data[5].provider_brands[14].location_count)

                        setBrand15State(res.data[5].provider_brands[15].name)
                        setBrand15Website(res.data[5].provider_brands[15].url)
                        setNum15Locations(res.data[5].provider_brands[15].location_count)
                        return;
                    case 'CT':
                        setNameState(res.data[6].name)

                        setBrandState(res.data[6].provider_brands[0].name)
                        setBrandWebsite(res.data[6].provider_brands[0].url)
                        setNumLocations(res.data[6].provider_brands[0].location_count)

                        setBrand1State(res.data[6].provider_brands[1].name)
                        setBrand1Website(res.data[6].provider_brands[1].url)
                        setNum1Locations(res.data[6].provider_brands[1].location_count)

                        setBrand2State(res.data[6].provider_brands[2].name)
                        setBrand2Website(res.data[6].provider_brands[2].url)
                        setNum2Locations(res.data[6].provider_brands[2].location_count)

                        setBrand3State(res.data[6].provider_brands[3].name)
                        setBrand3Website(res.data[6].provider_brands[3].url)
                        setNum3Locations(res.data[6].provider_brands[3].location_count)

                        setBrand4State(res.data[6].provider_brands[4].name)
                        setBrand4Website(res.data[6].provider_brands[4].url)
                        setNum4Locations(res.data[6].provider_brands[4].location_count)

                        setBrand5State(res.data[6].provider_brands[5].name)
                        setBrand5Website(res.data[6].provider_brands[5].url)
                        setNum5Locations(res.data[6].provider_brands[5].location_count)

                        setBrand6State(res.data[6].provider_brands[6].name)
                        setBrand6Website(res.data[6].provider_brands[6].url)
                        setNum6Locations(res.data[6].provider_brands[6].location_count)

                        setBrand7State(res.data[6].provider_brands[7].name)
                        setBrand7Website(res.data[6].provider_brands[7].url)
                        setNum7Locations(res.data[6].provider_brands[7].location_count)

                        setBrand8State(res.data[6].provider_brands[8].name)
                        setBrand8Website(res.data[6].provider_brands[8].url)
                        setNum8Locations(res.data[6].provider_brands[8].location_count)
                        return;
                    case 'DE':
                        setNameState(res.data[7].name)

                        setBrandState(res.data[7].provider_brands[0].name)
                        setBrandWebsite(res.data[7].provider_brands[0].url)
                        setNumLocations(res.data[7].provider_brands[0].location_count)

                        setBrand1State(res.data[7].provider_brands[1].name)
                        setBrand1Website(res.data[7].provider_brands[1].url)
                        setNum1Locations(res.data[7].provider_brands[1].location_count)

                        setBrand2State(res.data[7].provider_brands[2].name)
                        setBrand2Website(res.data[7].provider_brands[2].url)
                        setNum2Locations(res.data[7].provider_brands[2].location_count)

                        setBrand3State(res.data[7].provider_brands[3].name)
                        setBrand3Website(res.data[7].provider_brands[3].url)
                        setNum3Locations(res.data[7].provider_brands[3].location_count)

                        setBrand4State(res.data[7].provider_brands[4].name)
                        setBrand4Website(res.data[7].provider_brands[4].url)
                        setNum4Locations(res.data[7].provider_brands[4].location_count)

                        setBrand5State(res.data[7].provider_brands[5].name)
                        setBrand5Website(res.data[7].provider_brands[5].url)
                        setNum5Locations(res.data[7].provider_brands[5].location_count)

                        setBrand6State(res.data[7].provider_brands[6].name)
                        setBrand6Website(res.data[7].provider_brands[6].url)
                        setNum6Locations(res.data[7].provider_brands[6].location_count)
                        return;
                    case 'DC':
                        setNameState(res.data[8].name)

                        setBrandState(res.data[8].provider_brands[0].name)
                        setBrandWebsite(res.data[8].provider_brands[0].url)
                        setNumLocations(res.data[8].provider_brands[0].location_count)

                        setBrand1State(res.data[8].provider_brands[1].name)
                        setBrand1Website(res.data[8].provider_brands[1].url)
                        setNum1Locations(res.data[8].provider_brands[1].location_count)

                        setBrand2State(res.data[8].provider_brands[2].name)
                        setBrand2Website(res.data[8].provider_brands[2].url)
                        setNum2Locations(res.data[8].provider_brands[2].location_count)

                        setBrand3State(res.data[8].provider_brands[3].name)
                        setBrand3Website(res.data[8].provider_brands[3].url)
                        setNum3Locations(res.data[8].provider_brands[3].location_count)

                        setBrand4State(res.data[8].provider_brands[4].name)
                        setBrand4Website(res.data[8].provider_brands[4].url)
                        setNum4Locations(res.data[8].provider_brands[4].location_count)

                        setBrand5State(res.data[8].provider_brands[5].name)
                        setBrand5Website(res.data[8].provider_brands[5].url)
                        setNum5Locations(res.data[8].provider_brands[5].location_count)

                        setBrand6State(res.data[8].provider_brands[6].name)
                        setBrand6Website(res.data[8].provider_brands[6].url)
                        setNum6Locations(res.data[8].provider_brands[6].location_count)

                        setBrand7State(res.data[8].provider_brands[7].name)
                        setBrand7Website(res.data[8].provider_brands[7].url)
                        setNum7Locations(res.data[8].provider_brands[7].location_count)

                        return;
                    case 'FL':
                        setNameState(res.data[9].name)

                        setBrandState(res.data[9].provider_brands[0].name)
                        setBrandWebsite(res.data[9].provider_brands[0].url)
                        setNumLocations(res.data[9].provider_brands[0].location_count)

                        setBrand1State(res.data[9].provider_brands[1].name)
                        setBrand1Website(res.data[9].provider_brands[1].url)
                        setNum1Locations(res.data[9].provider_brands[1].location_count)

                        setBrand2State(res.data[9].provider_brands[2].name)
                        setBrand2Website(res.data[9].provider_brands[2].url)
                        setNum2Locations(res.data[9].provider_brands[2].location_count)

                        setBrand3State(res.data[9].provider_brands[3].name)
                        setBrand3Website(res.data[9].provider_brands[3].url)
                        setNum3Locations(res.data[9].provider_brands[3].location_count)

                        setBrand4State(res.data[9].provider_brands[4].name)
                        setBrand4Website(res.data[9].provider_brands[4].url)
                        setNum4Locations(res.data[9].provider_brands[4].location_count)

                        setBrand5State(res.data[9].provider_brands[5].name)
                        setBrand5Website(res.data[9].provider_brands[5].url)
                        setNum5Locations(res.data[9].provider_brands[5].location_count)

                        setBrand6State(res.data[9].provider_brands[6].name)
                        setBrand6Website(res.data[9].provider_brands[6].url)
                        setNum6Locations(res.data[9].provider_brands[6].location_count)

                        setBrand7State(res.data[9].provider_brands[7].name)
                        setBrand7Website(res.data[9].provider_brands[7].url)
                        setNum7Locations(res.data[9].provider_brands[7].location_count)

                        setBrand8State(res.data[9].provider_brands[8].name)
                        setBrand8Website(res.data[9].provider_brands[8].url)
                        setNum8Locations(res.data[9].provider_brands[8].location_count)

                        setBrand9State(res.data[9].provider_brands[9].name)
                        setBrand9Website(res.data[9].provider_brands[9].url)
                        setNum9Locations(res.data[9].provider_brands[9].location_count)

                        setBrand10State(res.data[9].provider_brands[10].name)
                        setBrand10Website(res.data[9].provider_brands[10].url)
                        setNum10Locations(res.data[9].provider_brands[10].location_count)

                        setBrand11State(res.data[9].provider_brands[11].name)
                        setBrand11Website(res.data[9].provider_brands[11].url)
                        setNum11Locations(res.data[9].provider_brands[11].location_count)
                        return console.log(res.data[9]);
                    case 'GA':
                        setNameState(res.data[10].name)

                        setBrandState(res.data[10].provider_brands[0].name)
                        setBrandWebsite(res.data[10].provider_brands[0].url)
                        setNumLocations(res.data[10].provider_brands[0].location_count)

                        setBrand1State(res.data[10].provider_brands[1].name)
                        setBrand1Website(res.data[10].provider_brands[1].url)
                        setNum1Locations(res.data[10].provider_brands[1].location_count)

                        setBrand2State(res.data[10].provider_brands[2].name)
                        setBrand2Website(res.data[10].provider_brands[2].url)
                        setNum2Locations(res.data[10].provider_brands[2].location_count)

                        setBrand3State(res.data[10].provider_brands[3].name)
                        setBrand3Website(res.data[10].provider_brands[3].url)
                        setNum3Locations(res.data[10].provider_brands[3].location_count)

                        setBrand4State(res.data[10].provider_brands[4].name)
                        setBrand4Website(res.data[10].provider_brands[4].url)
                        setNum4Locations(res.data[10].provider_brands[4].location_count)

                        setBrand5State(res.data[10].provider_brands[5].name)
                        setBrand5Website(res.data[10].provider_brands[5].url)
                        setNum5Locations(res.data[10].provider_brands[5].location_count)

                        setBrand6State(res.data[10].provider_brands[6].name)
                        setBrand6Website(res.data[10].provider_brands[6].url)
                        setNum6Locations(res.data[10].provider_brands[6].location_count)

                        setBrand7State(res.data[10].provider_brands[7].name)
                        setBrand7Website(res.data[10].provider_brands[7].url)
                        setNum7Locations(res.data[10].provider_brands[7].location_count)

                        setBrand8State(res.data[10].provider_brands[8].name)
                        setBrand8Website(res.data[10].provider_brands[8].url)
                        setNum8Locations(res.data[10].provider_brands[8].location_count)

                        setBrand9State(res.data[10].provider_brands[9].name)
                        setBrand9Website(res.data[10].provider_brands[9].url)
                        setNum9Locations(res.data[10].provider_brands[9].location_count)

                        setBrand10State(res.data[10].provider_brands[10].name)
                        setBrand10Website(res.data[10].provider_brands[10].url)
                        setNum10Locations(res.data[10].provider_brands[10].location_count)
                        
                        return;
                    case 'HI':
                        return console.log(res.data[11]);
                    case 'ID':
                        return console.log(res.data[12]);
                    case 'IL':
                        return console.log(res.data[13]);
                    case 'IN':
                        return console.log(res.data[14]);
                    case 'IA':
                        return console.log(res.data[15]);
                    case 'KS':
                        return console.log(res.data[16]);
                    case 'KY':
                        return console.log(res.data[17]);
                    case 'LA':
                        return console.log(res.data[18]);
                    case 'ME':
                        return console.log(res.data[19]);
                    case 'MH':
                        return console.log(res.data[20]);
                    case 'MD':
                        return console.log(res.data[21]);
                    case 'MA':
                        return console.log(res.data[22]);
                    case 'MI':
                        return console.log(res.data[23]);
                    case 'MN':
                        return console.log(res.data[24]);
                    case 'MS':
                        return console.log(res.data[25]);
                    case 'MO':
                        return console.log(res.data[26]);
                    case 'MT':
                        return console.log(res.data[27]);
                    case 'NE':
                        return console.log(res.data[28]);
                    case 'NV':
                        return console.log(res.data[29]);
                    case 'NH':
                        return console.log(res.data[30]);
                    case 'NJ':
                        return console.log(res.data[31]);
                    case 'NM':
                        return console.log(res.data[32]);
                    case 'NY':
                        return console.log(res.data[33]);
                    case 'NC':
                        return console.log(res.data[34]);
                    case 'ND':
                        return console.log(res.data[35]);
                    case 'OH':
                        return console.log(res.data[36]);
                    case 'OK':
                        return console.log(res.data[37]);
                    case 'OR':
                        return console.log(res.data[38]);
                    case 'PA':
                        return console.log(res.data[39]);
                    case 'PR':
                        return console.log(res.data[40]);
                    case 'RI':
                        return console.log(res.data[41]);
                    case 'SC':
                        return console.log(res.data[42]);
                    case 'SD':
                        return console.log(res.data[43]);
                    case 'TN':
                        return console.log(res.data[44]);
                    case 'TX':
                        return console.log(res.data[45]);
                    case 'VI':
                        return console.log(res.data[46]);
                    case 'UT':
                        return console.log(res.data[47]);
                    case 'VT':
                        return console.log(res.data[48]);
                    case 'VA':
                        return console.log(res.data[49]);
                    case 'WA':
                        return console.log(res.data[50]);
                    case 'WV':
                        return console.log(res.data[51]);
                    case 'WI':
                        return console.log(res.data[52]);
                    case 'wy':
                        return console.log(res.data[53]);
                }
            })
    }


    console.log(vaccineState);
    console.log(nameState);

    return (
        <div>
            <Nav />

            <VaccineSearch
                vaccineState={vaccineState}
                setVaccineState={setVaccineState}
                handleSubmit={handleSubmit}
                resetForm={resetForm}
                hideCards={hideCards}
            />
            <ProviderCard
                nameState={nameState}
                brandState={brandState}
                brandWebsite={brandWebsite}
                numLocations={numLocations}

                brand1State={brand1State}
                brand1Website={brand1Website}
                num1Locations={num1Locations}

                brand2State={brand2State}
                brand2Website={brand2Website}
                num2Locations={num2Locations}

                brand3State={brand3State}
                brand3Website={brand3Website}
                num3Locations={num3Locations}

                brand4State={brand4State}
                brand4Website={brand4Website}
                num4Locations={num4Locations}

                brand5State={brand5State}
                brand5Website={brand5Website}
                num5Locations={num5Locations}

                brand6State={brand6State}
                brand6Website={brand6Website}
                num6Locations={num6Locations}

                brand7State={brand7State}
                brand7Website={brand7Website}
                num7Locations={num7Locations}

                brand8State={brand8State}
                brand8Website={brand8Website}
                num8Locations={num8Locations}

                brand9State={brand9State}
                brand9Website={brand9Website}
                num9Locations={num9Locations}

                brand10State={brand10State}
                brand10Website={brand10Website}
                num10Locations={num10Locations}

                brand11State={brand11State}
                brand11Website={brand11Website}
                num11Locations={num11Locations}

                brand12State={brand12State}
                brand12Website={brand12Website}
                num12Locations={num12Locations}

                brand13State={brand13State}
                brand13Website={brand13Website}
                num13Locations={num13Locations}

                brand14State={brand14State}
                brand14Website={brand14Website}
                num14Locations={num14Locations}

                brand15State={brand15State}
                brand15Website={brand15Website}
                num15Locations={num15Locations}

                brand16State={brand16State}
                brand16Website={brand16Website}
                num16Locations={num16Locations}

                brand17State={brand17State}
                brand17Website={brand17Website}
                num17Locations={num17Locations}

                brand18State={brand18State}
                brand18Website={brand18Website}
                num18Locations={num18Locations}

                brand19State={brand19State}
                brand19Website={brand19Website}
                num19Locations={num19Locations}

            />
        </div>
    )
}


export default VaccineFinder;






