import React, {Component} from "react";
import styles from "../styles/Contact.css";
import cssModules from "react-css-modules";

class Contact extends Component {
  state = {
    ifSubmit: false
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ifSubmit: true});
  }

  onBack = () => {
    this.setState({ifSubmit: false});
  }

  render() {
    return (

      <div styleName="contact-container">
        {!this.state.ifSubmit &&
          <div>
            <h1 styleName="contact-title">Contact</h1>
            <p styleName="contact-content">Please feel free to contact us by filling out the form below and we will get back as soon as possible!</p>
            <form styleName="contact-form">
              Your Name (required) <input styleName="input-text-box" type="text" name="name" size="40"/>
              Your Email (required) <input styleName="input-text-box"type="email" name="email"/>
              Subject <input styleName="input-text-box" type="text" name="phone-number"/>
              Your Message <textarea styleName="input-textarea-box" rows="5"/>
              <input styleName="contact-button" type="submit" value="Submit" onClick={this.onSubmit}/>
            </form>
          </div>}
        {this.state.ifSubmit &&
          <div styleName="contact-submit-container">
            <p styleName="contact-submit">
              Thank you for contacting Skin Station Spa. Your message has been sent and we will get you back as soon as possible!
            </p>
            <button styleName="contact-button" onClick={this.onBack}>Back</button>
          </div>
        }
      </div>


    );
  }
}

export default cssModules(Contact, styles);
