import React, { Component } from 'react';
import PatientSignup from "../components/Signup";
import API from '../utils/API';


class Signup extends React.Component {
   state = {
            // loggedIn: localStorage.getItem(loggedIn),
            name: "",
            cellPhone: "",
            email: "",
            password: ""
        }
    
    patientSignUp = () => {
        const newPatient = {
            name: this.state.name,
            cellPhone: this.state.cellPhone,
            email: this.state.email,
            password: this.state.password
        };
        
        console.log(newPatient);

        API.savePatient(newPatient)
        .then((res) => {
            console.log("patient saved: ", res)
            // window.location.replace("/");
        })
        .catch((err) => {
            console.log(err)
        });
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
        this.patientSignUp();
    };

    patientLogin = () => {
        if (this.state.loggedIn === "true") {
            localStorage.setItem("loggedIn", "false");
            localStorage.setItem("userID", "");
            localStorage.setItem("email", "");
            this.setState({ email: "", loggedIn: "false", userID: ""});
        }
    }

    // patientLogin = (id) => {
    //     const user = this.state.email.find((user) => user.id === id)

    //     API.savePatient({
    //         email: user.id,
    //         name: user.patientInfo.name,
    //         cellPhone: user.patientInfo.cellPhone,
    //         testSite: user.patientInfo.testSite,
    //     }).then(() => this.testLocator());
    // };

    render() {
        return (
            <div>
                {/* <Nav />
                    // loggedIn={this.state.loggedIn}
                    // patientLogin={this.patientLogin}>
                // </Nav> */}
                <PatientSignup
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}>
                </PatientSignup>
            </div>
        )
    }
}

export default Signup;






