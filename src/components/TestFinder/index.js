import React from 'react';
import './style.css';

function TestFinder(props) {
    return (
        <div>
            <div className="container pt-5">
                <div className="row">
                    <h2 className="col-12 text-center">Find Testing Centers Near You</h2>
                    <form className="col-12 text-center pb-3" onSubmit={props.handleSubmit}>
                        <input id="input" type="text" placeholder="City, State" value={props.locationState} onChange={(e) => props.setLocationState(e.target.value)} />
                        <button id="submitBtn" className='btn-primary'>Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default TestFinder;