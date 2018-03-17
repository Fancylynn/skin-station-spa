import React, {Component} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/Signup.css";
import {Button, Form, FormGroup, Label, Input, FormText, Alert, Tooltip} from "reactstrap";

class SignupForm extends Component {
  state = {
    inconsistentErrorMessage: false,
    invalidEmail: false,
    invalidPassword: false,
    invalidUsername: false,
    confirmPassword: ""
  };

  onCreateUserCheck = (e) => {
    const {username, email, password} = this.props;
    this.setState({
      invalidEmail: false,
      invalidPassword: false,
      invalidUsername: false,
      inconsistentErrorMessage: false
    });
    if (!username || username.length === 0) {
      this.setState({invalidUsername: true});
    } else if (!email || email.length === 0) {
      this.setState({invalidEmail: true});
    } else if (!password || password.length === 0) {
      this.setState({invalidPassword: true});
    } else if (this.passwordInConsistent()) {
      this.setState({inconsistentErrorMessage: true});
    } else {
      e.preventDefault();
      this.props.onCreateNewUser();
    }
  }

  onConfirmPasswordChange = (e) => {
    this.setState({confirmPassword: e.target.value});
  }

  passwordInConsistent = () => this.props.password !== this.state.confirmPassword;

  render() {
    return (
      <Form styleName="signup-form-container">
        <h3>Welcome to </h3>
        <h3>Skin Station Spa ^_^</h3>
        <FormGroup>
          <Label for="username">Username
            <Tooltip
                style={{"background-color": "#dc3545"}}
                placement="top"
                isOpen={this.state.invalidUsername}
                autohide={false}
                target="username"
            >
              Username cannot be none.
            </Tooltip>
          </Label>
          <Input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              onChange={this.props.onUsernameChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Tooltip
              style={{"background-color": "#dc3545"}}
              placement="top"
              isOpen={this.state.invalidEmail}
              autohide={false}
              target="email"
          >
              Email cannot be none.
          </Tooltip>
          <Tooltip
              style={{"background-color": "#dc3545"}}
              placement="top"
              isOpen={this.props.createUserStatus === "fail"}
              autohide={false}
              target="email"
          >
              User with this email has already existed.
          </Tooltip>
          <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              onChange={this.props.onEmailChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password
            <Tooltip
                style={{"background-color": "#dc3545"}}
                placement="top"
                isOpen={this.state.inconsistentErrorMessage}
                autohide={false}
                target="password"
            >
              Input password inconsistent.
            </Tooltip>
            <Tooltip
                style={{"background-color": "#dc3545"}}
                placement="top"
                isOpen={this.state.invalidPassword}
                autohide={false}
                target="password"
            >
              Password cannot be none.
            </Tooltip>
          </Label>
          <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password with at least 6 digits or characters"
              onChange={this.props.onPasswordChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm your password"
              onChange={this.onConfirmPasswordChange}
          />
        </FormGroup>
        <Button color="success" onClick={this.onCreateUserCheck}>Sign Up</Button>
        <footer>
          <div styleName="footer-signup-login">
            <span>Already have an account?
              <a href="/signup">  Login here</a>
            </span>
          </div>
        </footer>
      </Form>
    );
  }
}

export default cssModules(SignupForm, styles);
