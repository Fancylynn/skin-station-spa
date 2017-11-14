import React, {Component, PropTypes} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/BackIcon.css";

const BackIcon = () => {
  return (
    <div styleName="back-icon">
      <a href="#"><img src="img/backicon.png" alt="back-icon"/></a>
    </div>
  );
};

export default cssModules(BackIcon, styles);
