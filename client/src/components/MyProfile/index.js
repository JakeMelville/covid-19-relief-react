import React from "react";

function MyProfile(props) {
    const savedSite = localStorage.getItem('test site');
    const savedUrl = localStorage.getItem('url')


    return (
        <div className='row justify-content-center pt-5'>
            <div className="card col-8 justify-content-around">
                <div className="card-body">
                    <h5 className="card-title"><b>Name </b> {props.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Email: {props.email}</li>
                    <li className="list-group-item">Cell Phone: {props.cellPhone}</li>
                    {/* <li className="list-group-item">{`Email: ${localStorage.getItem('email')}`}</li>
                    <li className="list-group-item">{`Cell Phone Number: ${localStorage.getItem('cellPhone')}`}</li> */}
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