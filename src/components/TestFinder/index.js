import React from 'react';
import './style.css';

function TestFinder(props) {
    return (
        <div>
            <div className="row pt-5">
                <div className="col-lg">
                    <div className="container">
                        <div className="row">
                            <h2 className="col-12 text-center">Find Testing Centers Near You</h2>
                            <form className="col-12 text-center pb-3">
                                <input id="input" type="text" placeholder="City, State" value={props.locationState} onKeyPress={props.handleKeyPress}/>
                                <button id="submitBtn" className='btn-primary'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TestFinder;