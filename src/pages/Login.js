import React from 'react';
import { Link } from 'react-router-dom';


function Login() {
    return (
        <div>
            <div class="card text-center">
                <div class="card-header">
                    <button class='btn float-left'>
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
                    <h2 class="p-5">WELCOME BACK!</h2>
                    <img class="card-img-top w-50 h-50" src="https://www.cityofevanston.org/Home/ShowPublishedImage/13646/637316239106900000" alt="Card image cap" />
                </div>
                <form id="login-form" class="card-body" method="post" action="/api/patient/login">
                    <div class="form-group">
                        <label for="username-input-login" class="control-label col-sm font-weight-bold">Username</label>
                        <input type="text" id="username-input-login" name="email" placeholder="EMAIL" />
                    </div>
                    <div class="form-group">
                        <label for="password-input-login" class="control-label col-sm font-weight-bold">Password</label>
                        <input type="password" id="password-input-login" name="password" placeholder="PASSWORD" />
                    </div>
                    <button type="submit" id="login-btn" class="btn">Login</button>
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

export default Login;