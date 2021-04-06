import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Nav() {
    return (
        <div class='float-right'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
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
                        <li class="nav-item">
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
                        <li class="nav-item">
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
                        <li class="nav-item">
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
                        <li class="nav-item">
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
                        <li class="nav-item">
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
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;