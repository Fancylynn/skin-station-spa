import React, {Component} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/Signup.css";
import {Alert} from "reactstrap";


class LoginForm extends Component {

  render() {
    return (
      <div styleName="sign-in-container">
        <h3>Great to see you again!</h3>
        <Alert color="danger" isOpen={this.props.loginStatus === "fail"} toggle={this.props.resetLoginStatus} styleName="error-message">
          Ooops! Your username or password is not correct!
        </Alert>
        <form onSubmit={this.props.login}>
          <div styleName="input-wrapper" title="username">
            <div styleName="input-area">
              <label styleName={this.props.inputUsername ?
                                          "input-name-not-empty"
                                          :
                                          "input-name-empty"}
              >
                            Username
                        </label>
              <input styleName="input-text-box"
                  type="text"
                  placeholder="Username"
                  maxLength="256"
                  onChange={this.props.onUsernameChange}
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
          <div styleName="login-button-container">
            <button styleName="login-button">Login</button>
            <input type="reset" value="Reset" styleName="reset-button"/>
          </div>
        </form>
        <footer styleName="footer">
          <div>
            <span styleName="forget-password">Forget Password?</span>
            <span styleName="no-account">{"Don't have an account? "}
              <span styleName="no-account-get-started" onClick={this.props.changeLoginToSignup}>Get started</span>
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default cssModules(LoginForm, styles);
