import React, {PropTypes} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/NavBar.css";

const NavBar = props => {
  return(
    <div styleName="nav-bar-fixed">
      <div styleName="nav-bar">
        <ul>
          <li><img styleName="logo" src="img/logo-inside.png" alt="logo icon"/></li>
        </ul>
        <div styleName="nav-links">
          <ul>
            <li><a>HOME</a></li>
            <li><a>SERVICES</a></li>
            <li><a>LOCATIONS</a></li>
            <li><a>RESERVATION</a></li>
            <li><a>CONTACT US</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// NavBar.propTypes = {
//     changeDisplayMode: PropTypes.func.isRequired,
// };

export default cssModules(NavBar, styles);
