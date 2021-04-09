import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

    const userData = {
        email: this.state.email,
        password: this.state.password
    };

    console.log(userData);
    };

    render() {
        const { errors } = this.state;

    return (
        <div>
            <div className="card text-center">
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
                    <h2 className="p-5">WELCOME BACK!</h2>
                    <img className="card-img-top w-50 h-50" src="https://www.cityofevanston.org/Home/ShowPublishedImage/13646/637316239106900000" alt="Card cap" />
                </div>
                <form noValidate onSubmit={this.onSubmit} id="login-form" className="card-body" method="post" action="/api/patient/login">
                    <div className="form-group">
                        <label htmlFor="username-input-login" className="control-label col-sm font-weight-bold">Username</label>
                        <input type="email" id="username-input-login" onChange={this.onChange} value={this.state.email} error={errors.email} id="email" placeholder="EMAIL" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password-input-login" className="control-label col-sm font-weight-bold">Password</label>
                        <input type="password" id="password-input-login" onChange={this.onChange} value={this.state.password} error={errors.password} id="password" placeholder="PASSWORD" />
                    </div>
                    <button type="submit" id="login-btn" className="btn">Login</button>
                    <Link
                        to='/signup'
                        className={
                            window.location.pathname === '/signup'
                                ? 'btn-link active'
                                : 'btn-link'
                        }
                    >
                        Don't have an account? Sign up
                    </Link>
                </form>
            </div>
        </div>
    )
}
}

export default Login;
 

