import React, {PropTypes} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/NavBar.css";

const NavBar = props => {
  return(
    <div styleName="nav-bar">
      <img styleName="logo" src="img/logo-inside.png" alt="logo icon"/>
      <div styleName="nav-links">
        <a href="#home">HOME</a>
        <a>SERVICES</a>
        <a>LOCATIONS</a>
        <a>RESERVATION</a>
        <a>CONTACT US</a>
      </div>
    </div>
  );
};

// NavBar.propTypes = {
//     changeDisplayMode: PropTypes.func.isRequired,
// };

export default cssModules(NavBar, styles);
