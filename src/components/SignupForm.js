import React, {Component} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/Signup.css";
import {Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";

class SignupForm extends Component {
  render() {
    return (
      <Form styleName="signup-form-container">
        <h3>Welcome to </h3>
        <h3>Skin Station Spa ^_^</h3>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type="text" name="username" id="username" placeholder="Username"/>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Email Address"/>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Password with at least 6 digits or characters"/>
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm your password"/>
        </FormGroup>
        <Button color="success">Sign Up</Button>
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
