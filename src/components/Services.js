import React, {Component, PropTypes} from "react";
import NavBar from "./NavBar";
import cssModules from "react-css-modules";
import styles from "../styles/Services.css";

class Services extends Component {
  state = {
    displayMode: "face"
  };

  displayFace = () => {
    this.setState({displayMode: "face"});
  }

  displayBody = () => {
    this.setState({displayMode: "body"});
  }

  displayHair = () => {
    this.setState({displayMode: "hair"});
  }

  displayPackage = () => {
    this.setState({displayMode: "package"});
  }

  face = () => {
    return (
      <div styleName="face-item">
        <img styleName="face-img" src="img/face1.jpg" alt="face"/>
        <div styleName="price">
          {"$54."}
          <span>00</span>
        </div>
        <div styleName="description">Fantastic facial mask experience</div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <NavBar/>
        <img styleName="service-img" src="img/services.jpg" alt="services-img"/>
        <div styleName="services">
          <p styleName="service-nav-title">Our Services</p>
          <ul styleName="service-nav">
            <li onClick={this.displayFace}>Face</li>
            <li onClick={this.displayBody}>body</li>
            <li onClick={this.displayHair}>Hair</li>
            <li onClick={this.displayPackage}>Package</li>
          </ul>
          <div>
            {this.face()}
          </div>
        </div>
      </div>
    );
  }
}

export default cssModules(Services, styles);
