import React, {Component, PropTypes} from "react";
// import Header from "../components/Header";
import NavBar from "../components/NavBar";
import SlidingWindowPictures from "../components/SlidingWindowPictures";
// import cssModules from "react-css-modules";
import PopService from "../components/MostPopularServices";
// import styles from "../styles/Homepage.css";

class Homepage extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <SlidingWindowPictures/>
        <PopService/>
      </div>
    );
  }
}

export default Homepage;
