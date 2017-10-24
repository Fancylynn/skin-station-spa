import React from "react";
import cssModules from "react-css-modules";
import styles from "../styles/MostPopularServices.css";

// @cssModules(styles)

const PopService = () => {
  return(
    <div styleName="pop-services">
      <div styleName="pop-service-facial">
        <img styleName="facial-icon" src="img/facialIcon.png" alt="facial icon"/>
        <p>Our popular facial services </p>
      </div>
      <div styleName="pop-service-body">
        <img src="img/bodyIcon.jpg" alt="body icon"/>
        <p>Our popular body services </p>
      </div>
      <div styleName="pop-service-hair">
        <img src="img/hairIcon.jpg" alt="hair icon"/>
        <p>Our popular hair services </p>
      </div>
    </div>
  );
};

export default cssModules(PopService, styles);
