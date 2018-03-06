import React, {Component} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/Signup.css";

class Signup extends Component {
  state = {
    inputUserName: false,
    inputPassword: false
  };

  onUserNameChange = (e) => {
    const userName = e.target.value;
    if (userName !== "") {
      this.setState({inputUserName: true});
    } else {
      this.setState({inputUserName: false});
    }
  }

  onPasswordChange = (e) => {
    const password = e.target.value;
    if (password !== "") {
      this.setState({inputPassword: true});
    } else {
      this.setState({inputPassword: false});
    }
  }

  render() {
    return (
      <div>
        <div styleName="sign-in-container">
          <h1>Great to see you again!</h1>
          <form>
            <div styleName="input-wrapper" title="Username / email">
              <div styleName="input-area">
                <label styleName={this.state.inputUserName ?
                                  "input-name-not-empty"
                                  :
                                  "input-name-empty"}
                >
                    Username / email
                </label>
                <input styleName="input-text-box"
                    type="text"
                    placeholder="Username / email"
                    maxLength="256"
                    onChange={this.onUserNameChange}
                    required
                />
                <div styleName="input-underline"/>
              </div>
            </div>
            <div styleName="input-wrapper" title="Password">
              <div styleName="input-area">
                <label styleName={this.state.inputPassword ?
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
                    onChange={this.onPasswordChange}
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
      </div>
    );
  }
}

export default cssModules(Signup, styles);
