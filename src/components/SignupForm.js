import React, {Component} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/Signup.css";

class SignupForm extends Component {
  render() {
    return (
      <h4>Welcome</h4>
    );
  }
}

export default cssModules(SignupForm, styles);
