import React from "react";
import cssModules from "react-css-modules";
import styles from "../styles/Header.css";

// @cssModules(styles)

const Header = () => {
  return(
    <div className="header">
      <h1 className="header-title">Skin Spa Station</h1>
    </div>
  );
};

export default cssModules(Header, styles);
