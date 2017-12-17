import React, {Component, PropTypes} from "react";
import NavBar from "../components/NavBar";
import SlidingWindowPictures from "../components/SlidingWindowPictures";
import PopService from "../components/MostPopularServices";
import Footer from "../components/Footer";
import cssModules from "react-css-modules";
import styles from "../styles/Homepage.css";


class Homepage extends Component {

  render() {
    return (
      <div styleName="homepage">
        <NavBar/>
        <SlidingWindowPictures/>
        <PopService/>
        <Footer/>
      </div>
    );
  }
}

export default cssModules(Homepage, styles);
