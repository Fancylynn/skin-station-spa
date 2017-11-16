import React, {Component, PropTypes} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/BackIcon.css";

import ReactDOM from 'react-dom';

class BackIcon extends Component {
  static propTypes = {
    scrollBarTop: PropTypes.bool.isRequired
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener("click", this.props.scrollToTop, false);
  }

  componentWillUnmount() {
    ReactDOM.findDOMNode(this).removeEventListener("click", this.props.scrollToTop, false);
  }

  render() {
    return (
      <div styleName={this.scrollBarTop ? "back-icon-invisible" : "back-icon"}>
        <img src="img/backicon.png" alt="back-icon"/>
      </div>
    );
  }
}
export default cssModules(BackIcon, styles);
