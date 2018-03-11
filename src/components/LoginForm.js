import React, {Component} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/Signup.css";


class LoginForm extends Component {
  render() {
    return (
      <div styleName="sign-in-container">
        <h1>Great to see you again!</h1>
        <div styleName={this.props.loginStatus === "fail" ? "error-message" : "no-error-message"}>
          <span>Your username or password is not correct.</span>
        </div>
        <form onSubmit={this.props.login}>
          <div styleName="input-wrapper" title="Email">
            <div styleName="input-area">
              <label styleName={this.props.inputEmail ?
                                          "input-name-not-empty"
                                          :
                                          "input-name-empty"}
              >
                            Email
                        </label>
              <input styleName="input-text-box"
                  type="text"
                  placeholder="Email"
                  maxLength="256"
                  onChange={this.props.onEmailChange}
                  required
              />
              <div styleName="input-underline"/>
            </div>
          </div>
          <div styleName="input-wrapper" title="Password">
            <div styleName="input-area">
              <label styleName={this.props.inputPassword ?
                                          "input-password-not-empty"
                                          :
                                          "input-password-empty"}
              >
                            Password
                        </label>
              <input styleName="input-text-box"
                  type="text"
                  placeholder="Password"
                  maxLength="256"
                  onChange={this.props.onPasswordChange}
                  required
              />
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

export default cssModules(LoginForm, styles);
