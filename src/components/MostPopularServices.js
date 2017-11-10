import React from "react";
import cssModules from "react-css-modules";
import styles from "../styles/MostPopularServices.css";

// @cssModules(styles)

const PopService = () => {
  return(
    <div styleName="pop-service-container">
      <div styleName="pop-service-row">
        <h1 styleName="pop-service-title">Most Popular Services</h1>
        <div styleName="pop-services-display">
          <div styleName="pop-service-left">
            <div styleName="pop-service-leftrow">
              <div>
                <h2>Massage</h2>
                <p> Massage therapy for relaxation or for a variety of health conditions </p>
              </div>
              <div styleName="pop-service-arrow">
                <img src="img/arrow-icon.png" alt="arrow icon"/>
              </div>
            </div>
            <div styleName="pop-service-leftrow">
              <div>
                <h2>Scrubs and Wraps</h2>
                <p> Healthy and natural method to cleanse and exfoliate your entire body </p>
              </div>
              <div styleName="pop-service-arrow">
                <img src="img/arrow-icon.png" alt="arrow icon"/>
              </div>
            </div>
            <div styleName="pop-service-leftrow">
              <div>
                <h2>Facial Add-On Mask</h2>
                <p> Massage therapy for relaxation or for a variety of health conditions </p>
              </div>
              <div styleName="pop-service-arrow">
                <img src="img/arrow-icon.png" alt="arrow icon"/>
              </div>
            </div>
          </div>

          <div styleName="pop-service-middle">
          </div>

          <div styleName="pop-service-right">
            <div styleName="pop-service-rightrow">
              <div styleName="pop-service-arrow-reverse">
                <img src="img/arrow-icon.png" alt="arrow icon"/>
              </div>
              <div>
                <h2>Body Treatment</h2>
                <p> Relieves muscle tension, improves blood circulation and lymphatic drainage </p>
              </div>
            </div>
            <div styleName="pop-service-rightrow">
              <div styleName="pop-service-arrow-reverse">
                <img src="img/arrow-icon.png" alt="arrow icon"/>
              </div>
              <div>
                <h2>Permanent Make-up</h2>
                <p> Freedom from daily makeup application using micro insertions</p>
              </div>
            </div>
            <div styleName="pop-service-rightrow">
              <div styleName="pop-service-arrow-reverse">
                <img src="img/arrow-icon.png" alt="arrow icon"/>
              </div>
              <div>
                <h2>Package Services</h2>
                <p> Spa packages that provides treatments to enhance your skin’s properties </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cssModules(PopService, styles);
