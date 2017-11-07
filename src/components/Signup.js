import React, {Component, PropTypes} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/Signup.css";

class Signup extends Component {
  render() {
    return (
      <div styleName="sign-in-container">
        <h1>Great to see you again!</h1>
        <form>
          <div styleName="input-wrapper" title="Username / email">
            <div styleName="input-area">
              <label>Username / email</label>
              <input styleName="input-text-box" type="text" placeholder="Username / email" maxLength="256" required/>
              <div styleName="input-underline"/>
            </div>
          </div>
          <div styleName="input-wrapper" title="Password">
            <div styleName="input-area">
              <label>Password</label>
              <input styleName="input-text-box" type="text" placeholder="Password" maxLength="256" required/>
              <div styleName="input-underline"/>
            </div>
          </div>
          <button styleName="login-button">Login</button>
        </form>
        <footer styleName="footer">
          <div>
            <span styleName="forget-password">Forget Password?</span>
            <span styleName="no-account">{"Don't have an account? "}<a>Get started</a></span>
          </div>
        </footer>
      </div>
    );
  }
}

export default cssModules(Signup, styles);
