import React, {Component} from "react";
import styles from "../styles/Reservation.css";
import cssModules from "react-css-modules";
import NavBar from "../components/NavBar";
import ReservationItem from "../components/ReservationItem";
import Footer from "../components/Footer";

const FACE_DATA = [
  {
    name: "Basic Facial",
    timeAndMoney: "60 min | $70"
  },
  {
    name: "Ultrasonic Facial",
    timeAndMoney: "75 min | $95"
  },
  {
    name: "Signature Facial",
    timeAndMoney: "75 min | $135"
  },
  {
    name: "Regeneration Facial",
    timeAndMoney: "80 min | $135"
  },
  {
    name: "Gentlemen's Facial",
    timeAndMoney: "60 min | $70"
  },
  {
    name: "Men’s Signature Facial",
    timeAndMoney: "75 min | $135"
  },
  {
    name: "Teen Facial",
    timeAndMoney: "35 min | $45"
  },
  {
    name: "Special Acne Facial",
    timeAndMoney: "75 min | $110"
  },
  {
    name: "Organic Facial",
    timeAndMoney: "75 min | $135"
  },
  {
    name: "Customized Facial",
    timeAndMoney: "75 min | $135"
  },
  {
    name: "Oxygenating Trio Facial",
    timeAndMoney: "75 min | $135"
  },
  {
    name: "Vitamin C Hydrating Facial",
    timeAndMoney: "80 min | $135"
  },
  {
    name: "Collagen Anti-Aging Facial",
    timeAndMoney: "90 min | $150"
  },
  {
    name: "Microdermabrasion Skin Peel Facial",
    timeAndMoney: "75 min | $135"
  },
  {
    name: "RF Firming Facial",
    timeAndMoney: "80 min | $150"
  },
  {
    name: "Thermal Lifting Facial",
    timeAndMoney: "80 min | $150"
  },
  {
    name: "Oxydermy Hyperbaric Oxygen Facial",
    timeAndMoney: "80 min | $150"
  },
  {
    name: "IPL Photo Rejuvenation Facial",
    timeAndMoney: "80 min | $200"
  }
];

class Reservation extends Component {
  state = {
    service: "facial"
  }

  onFacial = () => {
    this.setState({service: "facial"});
  }

  onBody = () => {
    this.setState({service: "body"});
  }

  onHair = () => {
    this.setState({service: "hair"});
  }

  onPackage = () => {
    this.setState({service: "package"});
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div styleName="reservation-title">
          <h2 styleName="title">Our Services</h2>
        </div>
        <div styleName="nav-bar">
          <ul>
            <li
                onClick={this.onFacial}
                styleName={this.state.service === "facial" ? "nav-selected" : "nav-li"}
            >
              Facial
            </li>
            <li
                onClick={this.onBody}
                styleName={this.state.service === "body" ? "nav-selected" : "nav-li"}
            >
            Body
            </li>
            <li
                onClick={this.onHair}
                styleName={this.state.service === "hair" ? "nav-selected" : "nav-li"}
            >
            Hair
            </li>
            <li
                onClick={this.onPackage}
                styleName={this.state.service === "package" ? "nav-selected" : "nav-li"}
            >
            Package
            </li>
          </ul>
        </div>
        <ReservationItem styleName="reservation-list" services={FACE_DATA}/>
        <Footer/>
      </div>
    );
  }
}

export default cssModules(Reservation, styles);
