import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    const { loginRedirect } = useAuth0();

    return (
        <button 
        className="btn btn-primary btn-block"
        onClick={() => loginRedirect()}
        >
            Log in 
        </button>
    );
};


export default Login;