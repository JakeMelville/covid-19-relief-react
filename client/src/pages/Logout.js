import axios from "axios";
import React from "react";

export function Logout() {
    return dispatch => {
        axios.get("/logout", { withCredentials: true })
        .then((res) => {
            return dispatch({ type: "RESULT", payload : res.data })
        })
        .catch ((err) => {
            return dispatch({ type: "ERROR", payload : error })
        });
    }
}

export default Logout;