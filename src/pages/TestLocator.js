import React from 'react';
import TestFinder from '../components/TestFinder/index';
import Nav from '../components/Nav/index';

// class Search extends Component {
//     state={
//         search: '',

//     }
// }

function TestLocator() {
    return (
        <div>
            <Nav />
            <TestFinder />
        </div>
    )
}

export default TestLocator;