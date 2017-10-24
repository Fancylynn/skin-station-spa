import React from "react";
import cssModules from "react-css-modules";
import styles from "../styles/SlidingWindowPictures.css";

// @cssModules(styles)

const SlidingWindowPictures = () => {
  return(
    <div>
      <img styleName="cover-page" src="img/coverPage.jpg" alt="Cover Page"/>
    </div>
  );
};

export default cssModules(SlidingWindowPictures, styles);
