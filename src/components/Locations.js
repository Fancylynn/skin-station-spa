import React, {Component, PropTypes} from "react";
import ReactGoogleMaps from "../components/GoogleMap";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackIcon from "../components/BackIcon";
import cssModules from "react-css-modules";
import styles from "../styles/Locations.css";

class Locations extends Component {

  render() {
    return (
      <div>
        <NavBar/>
        <div styleName="google-map-container">
          <h1>Test</h1>
          <ReactGoogleMaps styleName="google-map"/>
        </div>
        <Footer/>
        <BackIcon/>
      </div>
    );
  }
}

export default cssModules(Locations, styles);
