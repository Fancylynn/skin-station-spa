import React, {Component, PropTypes} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div styleName="footer-container">
        <div styleName="footer-row">
          <h2> COMPANY </h2>
          <h4> About Us </h4>
          <h4> Blog </h4>
          <h4> Location </h4>
          <h4> Store Policies</h4>
        </div>
        <div styleName="footer-row">
          <h2>Social</h2>
          <div styleName="social-icon">
            <img src="img/facebook-icon.png" alt="facebook-icon"/>
            <h4> Facebook</h4>
          </div>
          <div styleName="social-icon">
            <img src="img/twitter-icon.png" alt="twitter-icon"/>
            <h4> Twitter</h4>
          </div>
          <div styleName="social-icon">
            <img src="img/google-icon.png" alt="google-icon"/>
            <h4> Google Plus</h4>
          </div>
          <div styleName="social-icon">
            <img src="img/pinterest-icon.png" alt="pinterest-icon"/>
            <h4> Pinterest</h4>
          </div>
          <div styleName="social-icon">
            <img src="img/instagram-icon.png" alt="instagram-icon"/>
            <h4> Instagram</h4>
          </div>
        </div>
        <div styleName="footer-row">
          <h2>Contact</h2>
          <h4> Sign Up</h4>
          <h4> Privacy Policy</h4>
          <h4> FAQ</h4>
        </div>
      </div>
    );
  }
}

export default cssModules(Footer, styles);
