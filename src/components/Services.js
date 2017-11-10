import React, {Component, PropTypes} from "react";
import NavBar from "./NavBar";
import cssModules from "react-css-modules";
import styles from "../styles/Services.css";

class Services extends Component {

  render() {
    return (
      <div>
        <NavBar/>
        <img styleName="service-img" src="img/services.jpg" alt="services-img"/>
        <ul>
          <li>Face</li>
          <li>body</li>
          <li>Hair</li>
          <li>Package</li>
        </ul>
      </div>
    );
  }
}

export default cssModules(Services, styles);
