import React from 'react';
import './style.css'

function Nav() {
    return (
        <div>
            <ul class="row">
                <li class="col text-center">
                    <a href="login.html">Log In</a>
                </li>
                <li class="col text-center">
                    <a href="signup.html">Sign Up</a>
                </li>
                <li class="col text-center">
                    <a href="#test-locations" onclick="showTest()">Test Locations</a>
                </li>
                <li class="col text-center">
                    <a href="#vaccine-finder" onclick="showVaccine()">Vaccine Finder</a>
                </li>
                <li class="col text-center">
                    <a href="./myProfile.html">My Profile</a>

                </li>
            </ul>
        </div>
    )
}

export default Nav;