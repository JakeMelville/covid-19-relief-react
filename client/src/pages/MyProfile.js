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
    const savedSite = localStorage.getItem('test site');
    const savedUrl = localStorage.getItem('url')


    return (
        <div className='row justify-content-center pt-5'>
            <div className="card col-8 justify-content-around">
                <div className="card-body">
                    <h5 className="card-title">Name</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Email:</li>
                    <li className="list-group-item">Cell Phone Number:</li>
                    <li className="list-group-item">Password</li>
                </ul>
                <div className="card-body">
                    <h6>Test Site: {savedSite}</h6>
                    <a href={savedUrl} className="card-link">{savedUrl}</a>
                </div>
            </div>
        </div>
    )
}

export default MyProfile;