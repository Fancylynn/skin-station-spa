import React, {Component} from "react";
import styles from "../styles/AboutUs.css";
import cssModules from "react-css-modules";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

class Contact extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <img styleName="contact-image" src="img/contact-img1.jpg" alt="contact-us"/>
        <div styleName="company-info">
          <h1>About Us</h1>
          <p>Established in 1997, Skin Station Spa is the ideal place to go for
            those wishing to rejuvenate and restore their skin.It is not just for
            the fancy and high-end person, but for anyone looking for a relaxing
            experience. The environment at our spa is friendly, while maintaining
            a homey look. We believe that every person wants to look and feel
            beautiful, to relax and unwind, and to be able to escape their everyday
            lives. Our mission is to provide you with these needs throughout a unique
            variety of services that include facials, massages, hair removal and much
            more. Our professional staff performs to the best of their ability while
            tending to your individual needs to ensure that you will enjoy your time
            here. As the skincare industry evolves, so do we. We use the latest technology,
            techniques and quality products to maximize the overall effectiveness of the
            service, and to provide you with a better experience. To relax and start your
            journey in renewing your skins natural beauty, come to one of our six Skin
            Station Spa locations, where beauty is beyond skin deep.</p>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default cssModules(Contact, styles);
