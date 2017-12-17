import React, {Component} from "react";
import styles from "../styles/Contact.css";
import cssModules from "react-css-modules";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

class Contact extends Component {
  render() {
    return (
        <div>
            <NavBar/>
            <form styleName="contact-form">
                Name <input type="text" name="name"/>
                Email <input type="email" name="email"/>
                Phone Number <input type="tel" name="phone-number"/>
                Message <input type="text" name="message"/>
            </form>
            <Footer/>
        </div>
    );
  }
}

export default cssModules(Contact, styles);
