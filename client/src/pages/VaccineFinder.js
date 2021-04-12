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





    function handleSubmit(event) {
        event.preventDefault();


        API.getVaccineSites()
            .then(res => {

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
                        setNameState(res.data[1].name);
                        setBrandState(res.data[1].provider_brands[0].name)
                        return;
                    case 'AZ':
                        return console.log(res.data[2]);
                    case 'AR':
                        return console.log(res.data[3]);
                    case 'CA':
                        return console.log(res.data[4]);
                    case 'CO':
                        return console.log(res.data[5]);
                    case 'CT':
                        return console.log(res.data[6]);
                    case 'DE':
                        return console.log(res.data[7]);
                    case 'DC':
                        return console.log(res.data[8]);
                    case 'FL':
                        return console.log(res.data[9]);
                    case 'GA':
                        return console.log(res.data[10]);
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


            />
        </div>
    )
}


export default VaccineFinder;






