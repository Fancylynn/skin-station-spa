import React, {PropTypes} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/NavBar.css";
import {Link} from "react-router";

const NavBar = props => {
  return(
    <div styleName="nav-bar-fixed">
      <div styleName="nav-bar">
        <ul>
          <li><img styleName="logo" src="img/logo-inside.png" alt="logo icon"/></li>
        </ul>
        <div styleName="nav-links">
          <ul>
            <li><Link styleName="links" to="/">HOME</Link></li>
            <li><Link styleName="links" to="/services">SERVICES</Link></li>
            <li><Link styleName="links" to="/location">LOCATIONS</Link></li>
            <li><Link styleName="links" to="/reservation">RESERVATION</Link></li>
            <li><Link styleName="links" to="/contact">CONTACT US</Link></li>
            <li><Link styleName="links" to="/signup">SIGN IN</Link></li>
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
