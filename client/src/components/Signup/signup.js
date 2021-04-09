import React from "react";
import { Link, withRouter } from 'react-router-dom';

function PatientSignup(props) {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <button className="btn float-left">
            <Link
              to="/"
              className={
                window.location.pathname === "/"
                  ? "btn-link active"
                  : "btn-link"
              }
            >
              Home
            </Link>
          </button>
          <h2 className="text-center">Create Account</h2>
        </div>
        <div id="signup" role="tabpanel">
          <form id="signup-form" className="card-body">
            <div className="form-group">
              <label
                className="control-label col-sm-2 font-weight-bold"
                htmlFor="name-input-signup"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                onChange={props.handleInputChange}
                className="validate"
                name="name"
              />
            </div>

            <div className="form-group">
              <label
                className="control-label col-sm-2 font-weight-bold"
                htmlFor="cellPhone-input-signup"
              >
                Cell Phone
              </label>
              <input
                type="text"
                id="cellPhone"
                onChange={props.handleInputChange}
                className="validate"
                name="cellPhone"
              />
            </div>

            <div className="form-group">
              <label
                className="control-label col-sm-2 font-weight-bold"
                htmlFor="email-input-signup"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={props.handleInputChange}
                className="validate"
                name="email"
              />
            </div>

            <div className="form-group">
              <label
                className="control-label col-sm-2 font-weight-bold"
                htmlFor="password-input-signup"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={props.handleInputChange}
                className="validate"
                name="password"
              />
            </div>

            <button type="submit" id="signup-btn" className="btn btn-primary">
              Sign Up!
            </button>
            <Link
              to="/login"
              className={
                window.location.pathname === "/login"
                  ? "btn-link active"
                  : "btn-link"
              }
            >
              Have an account? Log in instead
            </Link>
          </form>
        </div>
      </div>

      <img
        src="https://www.cdc.gov/coronavirus/2019-ncov/images/site-banner/cases_rising_banner_1200x250_v5.png"
        alt="wear a mask, stay 6 feet away, avoid crowds and get a vaccine"
      />
    </div>
  );
}

export default PatientSignup;
