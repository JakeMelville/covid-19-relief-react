import React, { useState } from 'react';
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import { Link } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [theValue, setTheValue] = useState();
    const handleSubmit = e => {
        e.preventDefault();
        console.log("username is " + username);
        console.log("password is " + password);
    };
    // Create a onchange method to capture the data (input)
    const handleChange = (e)=> {
        e.preventDefault();

        console.log(e.target.value);
        console.log("working")
        setTheValue (e.target.value)
        // setUsername(theValue)
    //    console.log(theValue)
    }
    // grab the value as a const to later use > will refactor in a moment
    const takeTheValue = (e)=> {
        e.preventDefault();
        console.log(theValue);
    }

    // Grab the form (signup) _> post the values to the db (w/out authenication -> make sure the basic post route works)
    // Attempt to retriee information (w/ out authenotication)
    
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <button className='btn float-left'>
                        <Link
                            to='/'
                            className={
                                window.location.pathname === '/'
                                    ? 'btn-link active'
                                    : 'btn-link'
                            }
                        >
                            Home
                    </Link>
                    </button>
                    <h2 className='text-center'>Create Account</h2>
                </div>
                <div id="signup" role="tabpanel">
                    <form id="signup-form" value={theValue}  onChange={(e)=>handleChange(e)} onSubmit={(e)=> takeTheValue(e)}  className="card-body">
                        <div className="form-group">
                            <label className="control-label col-sm-2 font-weight-bold" htmlFor="name-input-signup">Name</label>
                            <input type="text" id="username-input-signup" name="name" />
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-2 font-weight-bold" htmlFor="cellPhone-input-signup">Cell Phone</label>
                            <input type="text" id="username-input-signup" name="cellPhone" />
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-2 font-weight-bold" htmlFor="email-input-signup">Email</label>
                            <input type="text" id="username-input-signup" name="email" />
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-2 font-weight-bold" htmlFor="password-input-signup">Password</label>
                            <input type="password" id="password-input-signup" name="password" />
                        </div>

                        <button type="submit" id="signup-btn"  className="btn btn-primary">Sign Up!</button>
                        <Link
                            to='/login'
                            className={
                                window.location.pathname === '/login'
                                    ? 'btn-link active'
                                    : 'btn-link'
                            }
                        >
                            Have an account? Log in instead
                        </Link>
                    </form>
                </div>
            </div>

            <img src="https://www.cdc.gov/coronavirus/2019-ncov/images/site-banner/cases_rising_banner_1200x250_v5.png" alt="wear a mask, stay 6 feet away, avoid crowds and get a vaccine" />
        </div>
    );
};

export default Signup;
