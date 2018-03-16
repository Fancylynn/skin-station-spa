import React, {Component} from "react";
import {connect} from "react-redux";
import cssModules from "react-css-modules";
import styles from "../styles/Signup.css";
import classnames from "classnames";
import * as actions from "../actions/loginAction";
import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Alert} from "reactstrap";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

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

  onUsernameChange = (e) => {
    const username = e.target.value;
    this.props.updateUsername(username);
  }

  onconfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    this.props.confirmPassword(confirmPassword);
  }

  onCreateNewUser = (e) => {
    e.preventDefault();
    const {username, email, password} = this.props;
    console.log(username);
    this.props.createNewUser(username, email, password);
  }

  login = (e) => {
    e.preventDefault();
    const {email, password} = this.props;
    this.props.doLogin(email, password);
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
                        onEmailChange={this.onEmailChange}
                        onPasswordChange={this.onPasswordChange}
                        login={this.login}
                        inputEmail={this.state.inputEmail}
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
                      onconfirmPassword={this.onconfirmPassword}
                      onCreateNewUser={this.onCreateNewUser}
                      passwordConsistent={this.props.passwordConsistent}
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
    createUserStatus: state.loginReducer.createUserStatus
  });
};

// connect(mapStateToProps, actions)(Signup);
export default connect(mapStateToProps, actions)(cssModules(Signup, styles));
