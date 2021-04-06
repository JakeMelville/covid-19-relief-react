import React from 'react'


function Login() {
    return (
        <div>
            <div class="card text-center">
                    <div class="card-header">
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
                    <a type="button" href="signup.html">Don't have an account? Sign up</a>
                </form>
            </div>
        </div>
    )
}

export default Login;