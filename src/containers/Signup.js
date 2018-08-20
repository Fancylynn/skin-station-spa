import React, {Component} from "react";
import {connect} from "react-redux";
import cssModules from "react-css-modules";
import styles from "../styles/Signup.css";
import classnames from "classnames";
import * as actions from "../actions/loginAction";
import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Alert} from "reactstrap";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";


class Signup extends Component {
  state = {
    inputUsername: false,        // whether input username or password in login form for styling use
    inputPassword: false,
    activeTab: "signIn"
  };

  onUsernameChange = (e) => {
    const username = e.target.value;
    if (username !== "") {
      this.setState({inputUsername: true});
    } else {
      this.setState({inputUsername: false});
    }
    this.props.updateUsername(username);
  }

  onConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    this.props.confirmPassword(confirmPassword);
  }

  onEmailChange = (e) => {
    const email = e.target.value;
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

  onCreateNewUser = () => {
    const {username, email, password} = this.props;
    this.props.createNewUser(username, email, password);
  }

  login = (e) => {
    e.preventDefault();
    const {username, password} = this.props;
    this.props.doLogin(username, password);
  }

  changeLoginToSignup = () => {
    this.setState({activeTab: "signUp"});
  }

  render() {
    return (
      <div styleName="sign-tab-container">
        <Nav tabs styleName="sign-tab">
          <NavItem>
            <NavLink
                styleName="nav-tab"
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
                styleName="nav-tab"
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
              <Col>
                <div>
                  {this.props.loginStatus !== "success" ?
                    <LoginForm
                        onUsernameChange={this.onUsernameChange}
                        onPasswordChange={this.onPasswordChange}
                        login={this.login}
                        inputUsername={this.state.inputUsername}
                        inputPassword={this.state.inputPassword}
                        loginStatus={this.props.loginStatus}
                        resetLoginStatus={this.props.resetLoginStatus}
                        changeLoginToSignup={this.changeLoginToSignup}
                    /> :
                    <div>
                      <Alert color="success" styleName="login-successful-message">
                        <h4 className="alert-heading">Congratulations!</h4>
                        <p>You have successfully logged in. The page will be redirected within 5 seconds.</p>
                        <hr/>
                        <p>If the page fails to reload in 5 seconds. Please click here.</p>
                      </Alert>
                    </div>
                  }
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="signUp">
            <Row>
              <Col>
                {this.props.createUserStatus !== "success" ?
                  <SignupForm
                      onUsernameChange={this.onUsernameChange}
                      onEmailChange={this.onEmailChange}
                      onPasswordChange={this.onPasswordChange}
                      onCreateNewUser={this.onCreateNewUser}
                      username={this.props.username}
                      email={this.props.email}
                      password={this.props.password}
                      createUserStatus={this.props.createUserStatus}
                  />
                :
                  <div>
                    <Alert color="success" styleName="login-successful-message">
                      <h4 className="alert-heading">Congratulations!</h4>
                      <p>Your Skin Station Spa account has been successfully created. An confirmation email will be sent to your mailbox.</p>
                      <hr/>
                      <p>The page will be redirected within 5 seconds. If the page fails to reload in 5 seconds. Please click here.</p>
                    </Alert>
                  </div>
              }

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
    password: state.loginReducer.password,
    loginStatus: state.loginReducer.loginStatus,
    passwordConsistent: state.loginReducer.passwordConsistent,
    createUserStatus: state.loginReducer.createUserStatus,
    errorSignupMessage: state.loginReducer.errorSignupMessage
  });
};

// connect(mapStateToProps, actions)(Signup);
export default connect(mapStateToProps, actions)(cssModules(Signup, styles));
