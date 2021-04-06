import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
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
                    <h2>Create Account</h2>
                </div>
                <div id="signup" role="tabpanel">
                    <form id="signup-form" className="card-body" method="post" action="/api/patient/">
                        <div className="form-group">
                            <label className="control-label col-sm-2 font-weight-bold" for="name-input-signup">Name</label>
                            <input type="text" id="username-input-signup" name="name" />
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-2 font-weight-bold" for="cellPhone-input-signup">Cell Phone</label>
                            <input type="text" id="username-input-signup" name="cellPhone" />
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-2 font-weight-bold" for="email-input-signup">Email</label>
                            <input type="text" id="username-input-signup" name="email" />
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-2 font-weight-bold" for="password-input-signup">Password</label>
                            <input type="password" id="password-input-signup" name="password" />
                        </div>

                        <button type="submit" id="signup-btn" className="btn btn-primary">Sign Up!</button>
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

    )
}

export default SignUp;