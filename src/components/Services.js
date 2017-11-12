import React, {Component, PropTypes} from "react";
import NavBar from "./NavBar";
import cssModules from "react-css-modules";
import styles from "../styles/Services.css";
import Footer from "../components/Footer";
import ServiceItem from "../components/ServiceItem";


const FACE_DATA = [
  {
    type: "Facial",
    src: "img/face1.jpg",
    alt: "facial"
  },
  {
    type: "Facial Add-On Treatment",
    src: "img/face2.jpg",
    alt: "facial add-on treatment"
  },
  {
    type: "Chemical Peels",
    src: "img/face3.jpg",
    alt: "chemical peels"
  },
  {
    type: "Eye",
    src: "img/face4.jpg",
    alt: "eye"
  },
  {
    type: "Permanent Make Up",
    src: "img/face5.jpg",
    alt: "permanent make up"
  }
];

const BODY_DATA = [
  {
    type: "Massage",
    src: "img/body1.jpg",
    alt: "massage"
  },
  {
    type: "Body Treatment",
    src: "img/body2.jpg",
    alt: "body treatment"
  },
  {
    type: "Scrubs and Wraps",
    src: "img/body3.jpg",
    alt: "scrubs and wraps"
  }
];

const HAIR_DATA = [
  {
    type: "Hair Removal",
    src: "img/hair1.jpg",
    alt: "hair removal"
  }
];

const PACKAGE_DATA = [
  {
    type: "Spa Package",
    src: "img/package1.jpg",
    alt: "spa package"
  },
  {
    type: "Queen of the Day",
    src: "img/package2.jpg",
    alt: "queen of the day"
  },
  {
    type: "King of the Day",
    src: "img/package3.jpg",
    alt: "king of the day"
  },
  {
    type: "Couple Spa Package",
    src: "img/package.jpg",
    alt: "couple Spa Package"
  }
];

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
            {this.state.displayMode === "face" && <ServiceItem pictures={FACE_DATA}/>}
            {this.state.displayMode === "body" && <ServiceItem pictures={BODY_DATA}/>}
            {this.state.displayMode === "hair" && <ServiceItem pictures={HAIR_DATA}/>}
            {this.state.displayMode === "package" && <ServiceItem pictures={PACKAGE_DATA}/>}
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default cssModules(Services, styles);
