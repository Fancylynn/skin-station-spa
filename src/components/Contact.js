import React, {Component} from "react";
import styles from "../styles/Contact.css";
import cssModules from "react-css-modules";

class Contact extends Component {
  render() {
    return (
      <div styleName="contact-container">
        <h1 styleName="contact-title">Contact</h1>
        <p styleName="contact-content">Please feel free to contact us by filling out the form below and we will get back as soon as possible!</p>
        <form styleName="contact-form">
                Your Name (required) <input styleName="input-text-box" type="text" name="name" size="40"/>
                Your Email (required) <input styleName="input-text-box"type="email" name="email"/>
                Subject <input styleName="input-text-box" type="text" name="phone-number"/>
                Your Message <textarea styleName="input-textarea-box" rows="5" cols="50"/>
                <input styleName="contact-button" type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default cssModules(Contact, styles);
