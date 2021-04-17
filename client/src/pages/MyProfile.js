import React from 'react';
import PatientProfile from "../components/MyProfile";
import axios from "axios";

class Profile extends React.Component {
    state = {
        loggedIn: localStorage.getItem("loggedIn"),
        userID: "",

        name: "",
        cellPhone: "",
        email: "",
        password: "",

        visible: false,
    }

    patientInfo = (patientData) => {
        axios.get(`/pateint/${patientData}`)
        .then((res) => {
            this.state({
                name: res.data.name,
                cellPhone: res.data.cellPhone,
                email: res.data.email,
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }


// componentDidMount() {
//     this.state({ pateintId: localStorage.getItem("patientId")}, () => {
//         this.patientInfo(this.state.pateintId)
//     });
// }

// handleInputChange = e => {
//     const name = e.target.name;
//     let value = e.target.value;

//     this.setState({
//         [name]: value
//     });
// };

// handleFormSubmit = e => {
//     e.preventDefault();

    manageLogin = () => {
        if (this.state.loggedIn === "true") {
            localStorage.setItem("name", "");
            localStorage.setItem("email", "");
            localStorage.setItem("cellPhone", "");
            this.setState({ email: "", loggedIn: "false", userId: ""});
        }
    }

    render() {
        return (
            <div>
                <PatientProfile
                    name={this.state.name}
                    email={this.state.email}
                    cellPhone={this.state.cellPhone}
                />
            </div>

        )
    }
};

export default Profile;
