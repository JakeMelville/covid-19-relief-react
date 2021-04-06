import React from 'react';
import './style.css';

function TestFinder() {
    return (
        <div>
            <div className="row pt-5">
                <div className="col-lg">
                    <div className="container">
                        <div className="row">
                            <h2 className="col-12 text-center">Find Testing Centers Near You</h2>
                            <form className="col-12 text-center pb-3">
                                <input id="input" type="text" placeholder="City, State" />
                                <button id="submitBtn" className='btn-primary' type="submit">Submit</button>
                            </form>
                            <div className="col-6" id="test-locations">
                                <ul id="resultsLocations">
                                    <li className="mb-2" id="result-1"></li>
                                    <li className="mb-2" id="result-2"></li>
                                    <li className="mb-2" id="result-3"></li>
                                    <li className="mb-2" id="result-4"></li>
                                    <li className="mb-2" id="result-5"></li>
                                </ul>
                            </div>
                            <div className="col-6" id="map"></div>
                            {/* <form id="formSight" class="mt-5 col-12 text-center">
                        <input id="chosenLocation" type="text" placeholder="Selected Test Sight"/>
                        <button id="submitLocation"class="btn-primary" type="submit">Save location to profile</button>
                    </form> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TestFinder;