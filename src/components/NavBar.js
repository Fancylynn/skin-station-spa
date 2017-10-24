import React, {PropTypes} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/Header.css";

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

export default cssModules(NavBar, styles);
