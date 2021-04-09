import React from 'react';
import axios from "axios";
import PatientLogin from "../components/Login/login";
import Nav from '../components/Nav';


class Login extends React.Component {
   state = {
            loggedIn: false,
            email: "",
            password: "",
            visible: false
        }
    
    login = (patientData) => {
        // const info = this;
        axios.post("/login", patientData)
        .then((res) => {
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


    // onChange = e => {
    //     this.setState({ [e.target.id]: e.target.value });
    // };

    // onSubmit = e => {
    //     e.preventDefault();

    // const userData = {
    //     email: this.state.email,
    //     password: this.state.password
    // };

    // console.log(userData);
    // };
       

//     return (
//         <div>
//             <div className="card text-center">
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
//                     <h2 className="p-5">WELCOME BACK!</h2>
//                     <img className="card-img-top w-50 h-50" src="https://www.cityofevanston.org/Home/ShowPublishedImage/13646/637316239106900000" alt="Card cap" />
//                 </div>
//                 <form noValidate onSubmit={this.onSubmit} id="login-form" className="card-body" method="post" action="/api/patient/login">
//                     <div className="form-group">
//                         <label htmlFor="username-input-login" className="control-label col-sm font-weight-bold">Username</label>
//                         <input type="text" id="email" onChange={props.handleInputChange} className="validate"  name="email" placeholder="EMAIL" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password-input-login" className="control-label col-sm font-weight-bold">Password</label>
//                         <input type="password" id="password" onChange={props.handleInputChange} className="validate"  name="password" placeholder="PASSWORD" />
//                     </div>
//                     <button type="submit" id="login-btn" className="btn">Login</button>
//                     <Link
//                         to='/signup'
//                         className={
//                             window.location.pathname === '/signup'
//                                 ? 'btn-link active'
//                                 : 'btn-link'
//                         }
//                     >
//                         Don't have an account? Sign up
//                     </Link>
//                 </form>
//             </div>
//         </div>
//     )
// }
// }


