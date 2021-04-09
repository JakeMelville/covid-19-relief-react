import React from 'react';
import './style.css';

function TestFinder(props) {
    return (
        <div>
            <div className='pic bg-image'>
                <div className="container w-100 m-0 p-">
                    <div className="row w-100 m-0">
                        <h2 className="col-12 text-center">Find Testing Centers Near You</h2>
                        <form id="inputForm" className="col-12 text-center pb-3" onSubmit={props.handleSubmit}>
                            <input id="input" type="text" placeholder="City, State" value={props.locationState} onChange={(e) => props.setLocationState(e.target.value)} />
                            <button id="submitBtn" className='btn-primary' type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
                <div className='row text-left pl-5 justify-content-center'>
                    <ul className='col-5'>
                        <li className='p-2'>{props.testingSite1}</li>


                        <button id='contactBtn' type='button' className='btn btn-small btn-outline-info' data-toggle="modal" data-target="#exampleModal" >Contact</button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        {/* <li>{props.link1}</li>
                        <li>{props.number1}</li> */}

                        <li className='p-2'>{props.testingSite2}</li>
                        <button id='contactBtn2' type='button' className='btn btn-small btn-outline-info'>Contact</button>
                        {/* <li>{props.link2}</li>
                        <li>{props.number2}</li> */}

                        <li className='p-2'>{props.testingSite3}</li>
                        <button id='contactBtn3' type='button' className='btn btn-small btn-outline-info'>Contact</button>
                        {/* <li>{props.link3}</li>
                        <li>{props.number3}</li> */}

                        <li className='p-2'>{props.testingSite4}</li>
                        <button id='contactBtn4' type='button' className='btn btn-small btn-outline-info'>Contact</button>
                        {/* <li>{props.link4}</li>
                        <li>{props.number4}</li> */}

                        <li className='p-2'>{props.testingSite5}</li>
                        <button id='contactBtn5' type='button' className='btn btn-small btn-outline-info'>Contact</button>
                        {/* <li>{props.link5}</li>
                        <li>{props.number5}</li> */}
                    </ul>
                    <img className='col-5' src={props.mapSrc} />
                </div>
            </div>
        </div >

    )
}

export default TestFinder;