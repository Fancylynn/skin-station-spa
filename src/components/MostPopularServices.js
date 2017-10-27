import React from "react";
import cssModules from "react-css-modules";
import styles from "../styles/MostPopularServices.css";

// @cssModules(styles)

const PopService = () => {
  return(
    <div styleName="pop-service-container">
      <div styleName="pop-service-row">
        <h1 styleName="pop-service-title">Most Popular Services</h1>
        <div styleName="pop-service-left">
          <div styleName="pop-service-leftrow">
            <h2>Massage</h2>
            <p> Massage therapy for relaxation or for a variety of health conditions </p>
          </div>
          <div styleName="pop-service-leftrow">
            <h2>Scrubs And Wraps</h2>
            <p> Healthy and natural method to cleanse and exfoliate your entire body </p>
          </div>
          <div styleName="pop-service-leftrow">
            <h2>Facial Add-On Mask</h2>
            <p> Massage therapy for relaxation or for a variety of health conditions </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cssModules(PopService, styles);
