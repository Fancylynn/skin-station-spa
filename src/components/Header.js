import React from "react";
import cssModules from "react-css-modules";
import styles from "../styles/Header.css";

// @cssModules(styles)

const Header = () => {
  return(
    <div styleName="header">
      <h1 >Skin Spa Station</h1>
    </div>
  );
};

export default cssModules(Header, styles);
