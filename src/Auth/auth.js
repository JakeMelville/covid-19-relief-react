import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { Auth0Provider } from "@auth0/auth0-react";


    ReactDOM.render (
        <Auth0Provider 
            domain="dev-ddxobfbu.us.auth0.com"
            clientId="042SzqMbF6fVCgrpVRzED6PVD4Co92xA"
            redirectUri={window.location.origin}
            onRedirectCallback={callBack}
        >
            <App />
        </Auth0Provider>,
        document.getElementById("root")
    );

export default Auth;
