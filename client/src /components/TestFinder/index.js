import React from 'react';
import './style.css';

function TestFinder(props) {
    return (
        <div>
            <div className='pic bg-image'>
                <div className="container w-100 m-0 p-">
                    <div className="row w-100 m-0">
                        <h2 className="col-12 text-center">Find Testing Centers Near You</h2>
                        <form id="inputForm"className="col-12 text-center pb-3" onSubmit={props.handleSubmit}>
                            <input id="input" type="text" placeholder="City, State" value={props.locationState} onChange={(e) => props.setLocationState(e.target.value)} />
                            <button id="submitBtn" className='btn-primary' type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
                <div className='row text-left pl-5 justify-content-center'>
                    <ul className='col-4'>
                        <li className='p-2'>{props.testingSite1}</li>
                        <li>{props.link1}</li>
                        <li>{props.number1}</li>

                        <li className='p-2'>{props.testingSite2}</li>
                        <li>{props.link2}</li>
                        <li>{props.number2}</li>

                        <li className='p-2'>{props.testingSite3}</li>
                        <li>{props.link3}</li>
                        <li>{props.number3}</li>

                        <li className='p-2'>{props.testingSite4}</li>
                        <li>{props.link4}</li>
                        <li>{props.number4}</li>

                        <li className='p-2'>{props.testingSite5}</li>
                        <li>{props.link5}</li>
                        <li>{props.number5}</li>
                    </ul>
                    <img className='col-4 img-fluid' src={props.mapSrc} />
                </div>
            </div>
        </div >

    )
}

export default TestFinder;