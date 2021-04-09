import React from 'react';
import Nav from '../components/Nav/index';
import MyProfile from "../components/MyProfile/myProfile";
import axios from "axios";

class MyProfile extends React.Component {
    state = {
        loggedIn: localStorage.getItem("loggedIn"),
        userID: "",

        name: "",
        cellPhone: "",
        email: "",
        password: "",

        visible: true,
    }

    patientInfo = (patientData) => {
        axios.get(`/pateint/${patientData}`)
        .then((res) => {
            this.state({
                name: res.data[0].name,
                cellPhone: res.data[0].cellPhone,
                email: res.data[0].email,
            });
        })
        .catch((err) => {
            console.log(error);
        });
    }
}


export default MyProfile;