import React, {Component, PropTypes} from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackIcon from "../components/BackIcon";

class Locations extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div styleName="location-detail-container">
            <div styleName="map"></div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Locations;
