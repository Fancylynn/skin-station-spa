import React, { PropTypes } from 'react';

const NavBar = props => {
    return(
        <nav className="navbar">
            <button>HOME</button>
            <button>SERVICES</button>
            <button>LOCATIONS</button>
            <button>RESERVATION</button>
            <button>CONTACT US</button>
        </nav>
    );
};

// NavBar.propTypes = {
//     changeDisplayMode: PropTypes.func.isRequired,
// };

export default NavBar;
