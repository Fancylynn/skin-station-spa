import React, {Component, PropTypes} from "react";
import NavBar from "./NavBar";
import cssModules from "react-css-modules";
import styles from "../styles/Services.css";
import Footer from "../components/Footer";

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
      <div styleName="services-display">
        <div styleName="display-item">
          <img styleName="display-img" src="img/face1.jpg" alt="face"/>
          <div styleName="type">
            <span>Facial</span>
          </div>
          <div styleName="description">
            <p>Deeply cleanse and rejuvenate your complexion</p>
          </div>
        </div>
        <div styleName="display-item">
          <img styleName="display-img" src="img/face1.jpg" alt="face"/>
          <div styleName="type">
            <span>Facial</span>
          </div>
          <div styleName="description">
            <p>Deeply cleanse and rejuvenate your complexion</p>
          </div>
        </div>
      </div>
    );
  };

  body = () => {
    return (
      <div styleName="display-item">
        <img styleName="display-img" src="img/body1.jpg" alt="body"/>
        <div styleName="type">
          <span>Massage</span>
        </div>
        <div styleName="description">
          <p>Massage therapy for relaxation or for a variety of health conditions</p>
        </div>
      </div>
    );
  }

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
            {this.state.displayMode === "face" && this.face()}
            {this.state.displayMode === "body" && this.body()}
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default cssModules(Services, styles);
