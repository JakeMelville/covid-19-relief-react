import React from "react";

function MyProfile() {
  return (
    <div className="row justify-content-center pt-5">
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
          <a href="#" className="card-link">
            Not sure of we'll need a link
          </a>
        </div>
      </div>
    </div>
  );
}
export default MyProfile;
