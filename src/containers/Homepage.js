import React, {Component, PropTypes} from "react";
import SlidingWindowPictures from "../components/SlidingWindowPictures";
import PopService from "../components/MostPopularServices";
import cssModules from "react-css-modules";
import styles from "../styles/Homepage.css";


class Homepage extends Component {

  render() {
    return (
      <div styleName="homepage">
        <SlidingWindowPictures/>
        <PopService/>
      </div>
    );
  }
}

export default cssModules(Homepage, styles);
