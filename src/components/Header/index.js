import React from 'react';
import Banner from './images/covid.jpg'

function Header() {
    return (
        <div>
            <img className='container-fluid m-0 p-0' src={Banner} alt='Covid Title'/>

        </div>
    )
}

export default Header;