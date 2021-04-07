import React from "react";
import Login from "../../pages/Login";
import Logout from "../../pages/Logout";
import { useAuth0 } from "@auth0/auth0-react";

const Auth = () => {
    const { authenticated } = useAuth0();

    return authenticated ? <Logout /> : <Login />;
};

export default Auth;