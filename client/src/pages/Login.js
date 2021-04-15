import React from 'react';
import axios from "axios";
import PatientLogin from "../components/Login";


class Login extends React.Component {
   state = {
            loggedIn: false,
            email: "",
            password: "",
            visible: false
        }
    
    login = (patientData) => {
        // const info = this;
        axios.post("/api/login", patientData)
        .then((res) => {
            console.log("login res: ", res);
            localStorage.setItem("patientID", res.data.id);
            localStorage.setItem("name", res.data.name);

            this.setState({ loggedIn: true }, () => {
                localStorage.setItem("loggedIn", true);
                window.location.replace("/")
            });
        })

    }
    
    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        const loginIn = {};
        loginIn.email = this.state.email;
        loginIn.password = this.state.password;
        this.login(loginIn);
    };

    patientLogin = () => {
        if (this.state.loggedIn === "true") {
            localStorage.setItem("loggedIn", "false");
            localStorage.setItem("userID", "");
            localStorage.setItem("email", "");
            this.setState({ email: "", loggedIn: "false", userID: ""});
        }
    }

    render() {
        return (
            <div>
                {/* <Nav
                    loggedIn={this.state.loggedIn}
                    patientLogin={this.patientLogin}>
                </Nav> */}
                <PatientLogin
                handleInputChange={this.handleInputChange}
                login={this.login}
                bypassLogin={this.bypassLogin}
                handleFormSubmit={this.handleFormSubmit}>
                </PatientLogin>
            </div>
        )
    }
}

export default Login;




