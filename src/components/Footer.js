import React, {Component, PropTypes} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/Footer.css";
import {Link} from "react-router";

class Footer extends Component {
  openPolicyWindow = (e) => {
    e.preventDefault();
    window.open(
      "../policy",
      "_blank"
    );
  };

  render() {
    return (
      <div styleName="footer-container">
        <div styleName="footer-row">
          <h2> COMPANY </h2>
          <Link styleName="links" to="/contact"><h4>About Us</h4></Link>
          <h4> Blog </h4>
          <Link styleName="links" to="/location"><h4>Location</h4></Link>
          <h4 onClick={this.openPolicyWindow}> Store Policies</h4>
        </div>
        <div styleName="footer-row">
          <h2>Social</h2>
          <a href="https://www.facebook.com/SkinStationNY" target="_blank" rel="noopener noreferrer">
            <div styleName="social-icon">
              <img styleName="social-icon-img" src="img/facebook-icon.png" alt="facebook-icon"/>
              <h4> Facebook</h4>
            </div>
          </a>
          <a href="https://twitter.com/SkinStationUSA" target="_blank" rel="noopener noreferrer">
            <div styleName="social-icon">
              <img styleName="social-icon-img" src="img/twitter-icon.png" alt="twitter-icon"/>
              <h4> Twitter</h4>
            </div>
          </a>
          <a href="https://plus.google.com/u/0/114511122311533602619" target="_blank" rel="noopener noreferrer">
            <div styleName="social-icon">
              <img styleName="social-icon-img" src="img/google-icon.png" alt="google-icon"/>
              <h4> Google Plus</h4>
            </div>
          </a>
          <a href="https://www.pinterest.com/skinstationnyc/" target="_blank" rel="noopener noreferrer">
            <div styleName="social-icon">
              <img styleName="social-icon-img" src="img/pinterest-icon.png" alt="pinterest-icon"/>
              <h4> Pinterest</h4>
            </div>
          </a>
          <a href="https://www.instagram.com/skinstationnyc/" target="_blank" rel="noopener noreferrer">
            <div styleName="social-icon">
              <img styleName="social-icon-img" src="img/instagram-icon.png" alt="instagram-icon"/>
              <h4> Instagram</h4>
            </div>
          </a>
        </div>
        <div styleName="footer-row">
          <h2>Contact</h2>
          <Link styleName="links" to="/signup"><h4> Sign Up</h4></Link>
          <h4> Contact Us</h4>
          <h4> FAQ</h4>
        </div>
        <div styleName="newsletter-container">
          <h2>NEWSLETTER</h2>
          <form>
            <input styleName="email" type="text" placeholder="Email Address"/>
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    );
  }
}

export default cssModules(Footer, styles);
