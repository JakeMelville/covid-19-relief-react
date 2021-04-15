import React from 'react';
// import PatientProfile from "../components/MyProfile/myProfile";
// import axios from "axios";

// class MyProfile extends React.Component {
//     state = {
//         loggedIn: localStorage.getItem("loggedIn"),
//         userID: "",

//         name: "",
//         cellPhone: "",
//         email: "",
//         password: "",

//         visible: true,
//     }

//     patientInfo = (patientData) => {
//         axios.get(`/pateint/${patientData}`)
//         .then((res) => {
//             this.state({
//                 name: res.data[0].name,
//                 cellPhone: res.data[0].cellPhone,
//                 email: res.data[0].email,
//             });
//         })
//         .catch((err) => {
//             console.log(error);
//         });
//     }
// }
function MyProfile() {
    return(
        <div>my profile</div>
    )
}

export default MyProfile;