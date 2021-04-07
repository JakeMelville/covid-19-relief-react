import React, { useState } from 'react';
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
// import { Link } from 'react-router-dom';

export default function Signup({ setToken }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        console.log("username is " + username);
        console.log("password is " + password);
    };

    return (
        <div>
            <div className="mt-4">
                    <h2>Create Account</h2>
                </div>
                <form onSubmit={handleSubmit}>
                <Container className="mt-3 px-5">
                    <Row className="form-group">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Username"
                                name="username"
                                onChange={e => setUsername(e.target.value)}
                                />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <button className="btn btn-success" type="submit">
                        Submit
                    </button>
                </Container>
                <Container className="mt-4">
                    <h3>Hello {username}!</h3>
                </Container>
            </form>
        <div>
            <img src="https://www.cdc.gov/coronavirus/2019-ncov/images/site-banner/cases_rising_banner_1200x250_v5.png" alt="wear a mask, stay 6 feet away, avoid crowds and get a vaccine" />
        </div>
    </div>
    );
};

Signup.propTypes = { 
    setToken: PropTypes.func.isRequired
};
// export default SignUp;