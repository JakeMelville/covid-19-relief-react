import React from 'react';
import Nav from '../components/Nav/index';

function MyProfile() {
    return (
        <div>
            <Nav />
        </div>
    )
}

// export default MyProfile;

// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const MyProfile = () => {
//     const { user } = useAuth0();

//     return (
//             <div>
//                 <h2>{user.name}</h2>
//                 <p>{user.email}</p>
//                 {JSON.stringify(user)}
//             </div>
//     );
// };

export default MyProfile;