import React, { Component } from 'react';
import PatientSignup from "../components/Signup/signup";
import Nav from '../components/Nav';
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

// const Signup = () => {
//     const [username, setUsername] = useState();
//     const [password, setPassword] = useState();
//     const [theValue, setTheValue] = useState();
//     const handleSubmit = e => {
//         e.preventDefault();
//         console.log("username is " + username);
//         console.log("password is " + password);
//     };
//     // Create a onchange method to capture the data (input)
//     const handleChange = (e)=> {
//         e.preventDefault();

//         console.log(e.target.value);
//         console.log("working")
//         setTheValue (e.target.value)
//         // setUsername(theValue)
//     //    console.log(theValue)
//     }
//     // grab the value as a const to later use > will refactor in a moment
//     const takeTheValue = (e)=> {
//         e.preventDefault();
//         console.log(theValue);
//     }

//     // Grab the form (signup) _> post the values to the db (w/out authenication -> make sure the basic post route works)
//     // Attempt to retriee information (w/ out authenotication)
    
// class Signup extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "",
//             cellPhone: "",
//             email: "",
//             password: "",
//             errors: {}
//         };
//     }

//     onChange = e => {
//         this.setState({ [e.target.id]: e.target.value });
//     };

//     onSubmit = e => {
//         e.preventDefault();

//     const newUser = {
//         name: this.state.name,
//         cellPhone: this.state.cellPhone,
//         email: this.state.email,
//         password: this.state.password
//     };

//     console.log(newUser);
//     };

//     render() {
//         const { errors } = this.state;
//     }
// }
//     return (
//         <div>
//             <div className="card">
//                 <div className="card-header">
//                     <button className='btn float-left'>
//                         <Link
//                             to='/'
//                             className={
//                                 window.location.pathname === '/'
//                                     ? 'btn-link active'
//                                     : 'btn-link'
//                             }
//                         >
//                             Home
//                     </Link>
//                     </button>
//                     <h2 className='text-center'>Create Account</h2>
//                 </div>
//                 <div id="signup" role="tabpanel">
//                     <form id="signup-form" className="card-body">
//                         <div className="form-group">
//                             <label className="control-label col-sm-2 font-weight-bold" htmlFor="name-input-signup">Name</label>
//                             <input type="text" id="name" onChange={props.handleInputChange} className="validate" name="name" />
//                         </div>

//                         <div className="form-group">
//                             <label className="control-label col-sm-2 font-weight-bold" htmlFor="cellPhone-input-signup">Cell Phone</label>
//                             <input type="text" id="cellPhone" onChange={props.handleInputChange} className="validate" name="cellPhone" />
//                         </div>

//                         <div className="form-group">
//                             <label className="control-label col-sm-2 font-weight-bold" htmlFor="email-input-signup">Email</label>
//                             <input type="email" id="email" onChange={props.handleInputChange} className="validate" name="email" />
//                         </div>

// //                         <div className="form-group">
// //                             <label className="control-label col-sm-2 font-weight-bold" htmlFor="password-input-signup">Password</label>
// //                             <input type="password" id="password" onChange={props.handleInputChange} className="validate" name="password" />
// //                         </div>

//                         <button type="submit" id="signup-btn"  className="btn btn-primary">Sign Up!</button>
//                         <Link
//                             to='/login'
//                             className={
//                                 window.location.pathname === '/login'
//                                     ? 'btn-link active'
//                                     : 'btn-link'
//                             }
//                         >
//                             Have an account? Log in instead
//                         </Link>
//                     </form>
//                 </div>
//             </div>

//             <img src="https://www.cdc.gov/coronavirus/2019-ncov/images/site-banner/cases_rising_banner_1200x250_v5.png" alt="wear a mask, stay 6 feet away, avoid crowds and get a vaccine" />
//         </div>
//     );
// };

// export default Signup;


