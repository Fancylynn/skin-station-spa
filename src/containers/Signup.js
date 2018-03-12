import React, {Component} from "react";
import {connect} from "react-redux";
import cssModules from "react-css-modules";
import styles from "../styles/Signup.css";
import classnames from "classnames";
import * as actions from "../actions/loginAction";
import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from "reactstrap";
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
                <div>
                  {this.props.loginStatus !== "success" ?
                    <LoginForm
                        onEmailChange={this.onEmailChange}
                        onPasswordChange={this.onPasswordChange}
                        login={this.login}
                        inputEmail={this.state.inputEmail}
                        inputPassword={this.state.inputPassword}
                        loginStatus={this.props.loginStatus}
                    /> :
                    <div>
                      <div styleName="login-successful-message">
                        <img src="img/correct.png" alt="login successfully"/>
                        <span>Congratulations! You have successfully logged in. The page will be redirected within 5 seconds.</span>
                      </div>
                    </div>
                  }
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="signUp">
            <Row>
              <Col sm="12">
                <SignupForm/>
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
    loginStatus: state.loginReducer.loginStatus
  });
};

// connect(mapStateToProps, actions)(Signup);
export default connect(mapStateToProps, actions)(cssModules(Signup, styles));
