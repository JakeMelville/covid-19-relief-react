import React from 'react';
import './style.css';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css"

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
                        <button id='contactBtn' type='button' className='btn btn-small btn-outline-info' onClick={props.showModal}>Contact</button>
                        <Modal show={props.isOpen} onHide={props.hideModal}>
                            <Modal.Body>
                                Website: <a href={props.link1} target='_blank' rel="noopener noreferrer">{props.link1}</a>
                            </Modal.Body>
                            <Modal.Body>
                                Phone Number: {props.number1}
                            </Modal.Body>
                        <Modal.Footer>
                            <button onClick={props.hideModal}>Cancel</button>
                        </Modal.Footer>
                        </Modal>

                    <li className='p-2'>{props.testingSite2}</li>
                    <button id='contactBtn2' type='button' className='btn btn-small btn-outline-info' onClick={props.showModal2}>Contact</button>
                    <Modal show={props.isOpen2} onHide={props.hideModal}>
                            <Modal.Body>
                                Website: <a href={props.link2} target='_blank' rel="noopener noreferrer">{props.link2}</a>
                            </Modal.Body>
                            <Modal.Body>
                                Phone Number: {props.number2}
                            </Modal.Body>
                        <Modal.Footer>
                            <button onClick={props.hideModal2}>Cancel</button>
                        </Modal.Footer>
                        </Modal>
                    

                    <li className='p-2'>{props.testingSite3}</li>
                    <button id='contactBtn3' type='button' className='btn btn-small btn-outline-info'  onClick={props.showModal3}>Contact</button>
                    <Modal show={props.isOpen3} onHide={props.hideModal}>
                            <Modal.Body>
                                Website: <a href={props.link3} target='_blank' rel="noopener noreferrer">{props.link3}</a>
                            </Modal.Body>
                            <Modal.Body>
                                Phone Number: {props.number3}
                            </Modal.Body>
                        <Modal.Footer>
                            <button onClick={props.hideModal3}>Cancel</button>
                        </Modal.Footer>
                        </Modal>
                    
                    <li className='p-2'>{props.testingSite4}</li>
                    <button id='contactBtn4' type='button' className='btn btn-small btn-outline-info'  onClick={props.showModal4}>Contact</button>
                    <Modal show={props.isOpen4} onHide={props.hideModal}>
                            <Modal.Body>
                                Website: <a href={props.link4} target='_blank' rel="noopener noreferrer">{props.link4}</a>
                            </Modal.Body>
                            <Modal.Body>
                                Phone Number: {props.number4}
                            </Modal.Body>
                        <Modal.Footer>
                            <button onClick={props.hideModal4}>Cancel</button>
                        </Modal.Footer>
                        </Modal>

                    <li className='p-2'>{props.testingSite5}</li>
                    <button id='contactBtn5' type='button' className='btn btn-small btn-outline-info'  onClick={props.showModal5}>Contact</button>
                    <Modal show={props.isOpen5} onHide={props.hideModal}>
                            <Modal.Body>
                                Website: <a href={props.link5} target='_blank' rel="noopener noreferrer">{props.link5}</a>
                            </Modal.Body>
                            <Modal.Body>
                                Phone Number: {props.number5}
                            </Modal.Body>
                        <Modal.Footer>
                            <button onClick={props.hideModal5}>Cancel</button>
                        </Modal.Footer>
                        </Modal>
                    </ul>
                <img className='col-5' src={props.mapSrc} alt={''}/>
            </div>
        </div>
        </div >

    )
}

export default TestFinder;