import React, {Component} from "react";
import {connect} from "react-redux";
import cssModules from "react-css-modules";
import styles from "../styles/Signup.css";
import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from "reactstrap";
import classnames from "classnames";
import * as actions from "../actions/loginAction";
import {bindActionCreators} from "redux";


// const mapDispathToProps = (dispatch) => {
//   return ({
//     updateEmail: bindActionCreators(updateEmail, dispatch),
//     updatePassword: bindActionCreators(updatePassword, dispatch),
//     doLogin: bindActionCreators(doLogin, dispatch)
//   });
// };


class Signup extends Component {
  state = {
    inputEmail: false,
    inputPassword: false,
    activeTab: "signIn"
  };

  onEmailChange = (e) => {
    const email = e.target.value;
    console.log(email);
    if (email !== "") {
      this.setState({inputEmail: true});
    } else {
      this.setState({inputEmail: false});
    }
    this.props.updateEmail(email);
  }

  onPasswordChange = (e) => {
    const password = e.target.value;
    if (password !== "") {
      this.setState({inputPassword: true});
    } else {
      this.setState({inputPassword: false});
    }
    this.props.updatePassword(password);
  }

  onTabChange = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({activeTab: tab});
    }
  }

  login = (e) => {
    e.preventDefault();
    const {email, password} = this.props;
    this.props.doLogin(email, password);
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
                  <form onSubmit={this.login}>
                    <div styleName="input-wrapper" title="Email">
                      <div styleName="input-area">
                        <label styleName={this.state.inputEmail ?
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
                            onChange={this.onEmailChange}
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
                <h4>{this.props.username}</h4>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    username: state.loginReducer.username,
    email: state.loginReducer.email,
    password: state.loginReducer.password
  });
};

// connect(mapStateToProps, actions)(Signup);
export default connect(mapStateToProps, actions)(cssModules(Signup, styles));
