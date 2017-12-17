import React, {Component} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/BackIcon.css";

import ReactDOM from 'react-dom';

class BackIcon extends Component {

  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener("click", this.scrollToTop, false);
    window.addEventListener("scroll", this.scrollBarDetect, false);
  }

  componentWillUnmount() {
    ReactDOM.findDOMNode(this).removeEventListener("click", this.scrollToTop, false);
    window.removeEventListener("scroll", this.scrollBarDetect, false);
  }

  state = {
    scrollBarTop: true
  };

  scrollBarDetect = (e) => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > 100) {
      this.setState({scrollBarTop: false});
    } else {
      this.setState({scrollBarTop: true});
    }
  };

  scrollToTop = () => {
    const scrollDuration = 300;
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    const scrollInterval = setInterval(function() {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else
        clearInterval(scrollInterval);
    }
    , 15);
  };

  render() {
    return (
      <div styleName="back-icon">
        {!this.state.scrollBarTop && <img src="img/backicon.png" alt="back-icon"/>}
      </div>
    );
  }
}
export default cssModules(BackIcon, styles);
