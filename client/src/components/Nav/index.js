import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Nav(props) {
    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li onClick={props.patientLogin}>
                            <Link
                                to='/'
                                className={
                                    window.location.pathname === '/'
                                        ? 'nav-link active'
                                        : 'nav-link'
                                }
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to='/myprofile'
                                className={
                                    window.location.pathname === '/myprofile'
                                        ? 'nav-link active'
                                        : 'nav-link'
                                }
                            >
                                My Profile
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to='/testlocator'
                                className={
                                    window.location.pathname === '/testlocator'
                                        ? 'nav-link active'
                                        : 'nav-link'
                                }
                            >
                                Test Locator
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to='/vaccinefinder'
                                className={
                                    window.location.pathname === '/vaccinefinder'
                                        ? 'nav-link active'
                                        : 'nav-link'
                                }
                            >
                                Vaccine Finder
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to='/login'
                                className={
                                    window.location.pathname === '/login'
                                        ? 'nav-link active'
                                        : 'nav-link'
                                }
                            >
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to='/signup'
                                className={
                                    window.location.pathname === '/signup'
                                        ? 'nav-link active'
                                        : 'nav-link'
                                }
                            >
                                Sign Up
                            </Link>
                        </li>
                        <li id='logout' className="nav-item">
                            <Link
                                to='/login'
                                className={
                                    window.location.pathname === '/login'
                                        ? 'nav-link active'
                                        : 'nav-link'
                                }
                            >
                                Logout
                            </Link>
                        </li>
                        <li id='loginWelcome' className={( props.loggedIn === "true") ? "" : "hiddenForNav"}>{`Welcome, ${localStorage.getItem('name')}!`}</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;