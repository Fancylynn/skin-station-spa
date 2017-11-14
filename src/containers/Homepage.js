import React, {Component, PropTypes} from "react";
import NavBar from "../components/NavBar";
import SlidingWindowPictures from "../components/SlidingWindowPictures";
import PopService from "../components/MostPopularServices";
import Footer from "../components/Footer";
import BackIcon from "../components/BackIcon";

class Homepage extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <SlidingWindowPictures/>
        <PopService/>
        <BackIcon/>
        <Footer/>
      </div>
    );
  }
}

export default Homepage;
