import React from 'react';
import Header from '../components/Header/index';
import Nav from '../components/Nav/index';
import CovidUpdate from '../components/CovidUpdateSection/index'

function Home() {
    return (
        <div>
            <Header />
            {/* <Nav /> */}
            <CovidUpdate />
        </div>
    )
}

export default Home;