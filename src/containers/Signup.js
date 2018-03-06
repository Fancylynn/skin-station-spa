import React, {Component} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/Signup.css";
import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from "reactstrap";
import classnames from "classnames";


class Signup extends Component {
  state = {
    inputUserName: false,
    inputPassword: false,
    activeTab: "signIn"
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

  onTabChange = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({activeTab: tab});
    }
  }

  render() {
    return (
      <div styleName="sign-tab-container">
        <Nav tabs styleName="sign-tab">
          <NavItem>
            <NavLink
                className={classnames({active: this.state.activeTab === "signIn"})}
                onClick={() => {
                  this.onTabChange("signIn");
                }}
            >
            Sign In
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
                className={classnames({active: this.state.activeTab === "signUp"})}
                onClick={() => {
                  this.onTabChange("signUp");
                }}
            >
            Sign Up
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="signIn">
            <Row>
              <Col sm="12">
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
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="signUp">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default cssModules(Signup, styles);
