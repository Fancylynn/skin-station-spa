import React, {Component} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/Signup.css";
import {Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";

class SignupForm extends Component {
  render() {
    return (
      <Form styleName="signup-form-container">
        <div styleName="signup-inline-container">
          <FormGroup styleName="signup-sm-input">
            <Label for="firstname">First Name</Label>
            <Input type="text" name="firstname" id="firstname" placeholder="First Name"/>
          </FormGroup>
          <FormGroup styleName="signup-sm-input">
            <Label for="lastname">Last Name</Label>
            <Input type="text" name="lastname" id="lastname" placeholder="Last Name"/>
          </FormGroup>
        </div>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type="text" name="username" id="username" placeholder="Username"/>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Email Address"/>
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone Number</Label>
          <Input type="number" name="phone" id="phone" placeholder="Phone Number"/>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Password with at least 6 digits or characters"/>
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm your password"/>
        </FormGroup>
      </Form>
    );
  }
}

export default cssModules(SignupForm, styles);
