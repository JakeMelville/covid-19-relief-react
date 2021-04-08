import React from 'react';

function TestFinder() {
    return (
        <div>
            <div class="row pt-5">
                <div class="col-lg">
                    <div class="container">
                        <div class="row">
                            <h2 class="col-12 text-center">Find Testing Centers Near You</h2>
                            <form class="col-12 text-center pb-3">
                                <input id="input" type="text" placeholder="City, State"/>
                                <button id="submitBtn" class='btn-primary' type="submit">Submit</button>
                            </form>
                    <div class="col-6" id="test-locations">
                        <ul id="resultsLocations">
                            <li class="mb-2" id="result-1"></li>
                            <li class="mb-2" id="result-2"></li>
                            <li class="mb-2" id="result-3"></li>
                            <li class="mb-2" id="result-4"></li>
                            <li class="mb-2" id="result-5"></li>
                        </ul>
                    </div>
                    <div class="col-6" id="map"></div>
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