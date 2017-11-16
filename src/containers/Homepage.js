import React, {Component, PropTypes} from "react";
import NavBar from "../components/NavBar";
import SlidingWindowPictures from "../components/SlidingWindowPictures";
import PopService from "../components/MostPopularServices";
import Footer from "../components/Footer";
import BackIcon from "../components/BackIcon";
import cssModules from "react-css-modules";
import styles from "../styles/Homepage.css";


class Homepage extends Component {

  componentDidMount() {
    window.addEventListener("scroll", this.scrollBarDetect, false);
  }

  componentWillUnmount() {
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
      <div styleName="homepage">
        <NavBar/>
        <SlidingWindowPictures/>
        <PopService/>
        {!this.state.scrollBarTop &&
          <BackIcon
              scrollBarTop={this.state.scrollBarTop}
              scrollToTop={this.scrollToTop}
          />
        }
        <Footer/>
      </div>
    );
  }
}

export default cssModules(Homepage, styles);
