import React, {Component} from "react";
import styles from "../styles/Contact.css";
import cssModules from "react-css-modules";

class Contact extends Component {
  render() {
    return (
      <div>
        <form styleName="contact-form">
                Name <input type="text" name="name"/>
                Email <input type="email" name="email"/>
                Phone Number <input type="tel" name="phone-number"/>
                Message <input type="text" name="message"/>
        </form>
      </div>
    );
  }
}

export default cssModules(Contact, styles);
