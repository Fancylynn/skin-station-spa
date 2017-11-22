import React, {Component} from "react";
import styles from "../styles/Reservation.css";
import cssModules from "react-css-modules";
import NavBar from "../components/NavBar";

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
          <div styleName="nav-bar">
            <ul>
              <li onClick={this.onFacial}>Facial</li>
              <li onClick={this.onBody}>Body</li>
              <li onClick={this.onHair}>Hair</li>
              <li onClick={this.onPackage}>Package</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default cssModules(Reservation, styles);
