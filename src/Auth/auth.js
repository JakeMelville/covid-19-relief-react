import React from "react";
import { User } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth = ({ children }) => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

    const profile = User();
    
    const callBack = (appState) => {
        profile.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider 
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={callBack}
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth;
