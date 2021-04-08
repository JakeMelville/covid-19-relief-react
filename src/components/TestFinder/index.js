import React from 'react';
import './style.css';

function TestFinder(props) {
    return (
        <div>
            <body>
                <div className="container w-100 m-0 p-5">
                    <div className="row w-100 m-0">
                        <h2 className="col-12 text-center">Find Testing Centers Near You</h2>
                        <form className="col-12 text-center pb-3" onSubmit={props.handleSubmit}>
                            <input id="input" type="text" placeholder="City, State" value={props.locationState} onChange={(e) => props.setLocationState(e.target.value)} />
                            <button id="submitBtn" className='btn-primary'>Submit</button>
                        </form>
                    </div>
                </div>
            </body>
        </div >

    )
}

export default TestFinder;