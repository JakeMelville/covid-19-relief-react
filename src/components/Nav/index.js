import React from 'react';
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
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Login <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sign Up</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Test Locator</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Vaccine Finder</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">My Profile</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;