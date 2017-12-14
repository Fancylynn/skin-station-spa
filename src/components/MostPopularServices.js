import React, {Component, PropTypes} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/MostPopularServices.css";

// @cssModules(styles)

class PopService extends Component {
  state = {
    curtService: "massage"
  };

  onChangeServiceToMassage = () => {
    this.setState({curtService: "massage"});
  }

  onChangeServiceToScrubs = () => {
    this.setState({curtService: "scrubs-and-wraps"});
  }

  onChangeServiceToFacial = () => {
    this.setState({curtService: "facial-add-on-mask"});
  }

  onChangeServiceToBody = () => {
    this.setState({curtService: "body-treatment"});
  }

  onChangeServiceToPermanent = () => {
    this.setState({curtService: "pernament-makeup"});
  }

  onChangeServiceToPackage = () => {
    this.setState({curtService: "package-services"});
  }

  render() {
    return(
      <div styleName="pop-service-container">
        <div styleName="pop-service-row">
          <h1 styleName="pop-service-title">Most Popular Services</h1>
          <div styleName="pop-services-display">
            <div styleName="pop-service-left">
              <div styleName="pop-service-leftrow">
                <div onMouseOver={this.onChangeServiceToMassage}>
                  <h2>Massage</h2>
                  <p> Massage therapy for relaxation or for a variety of health conditions </p>
                </div>
                <div styleName="pop-service-arrow">
                  <img src="img/arrow-icon.png" alt="arrow icon"/>
                </div>
              </div>
              <div styleName="pop-service-leftrow">
                <div onMouseOver={this.onChangeServiceToScrubs} >
                  <h2>Scrubs and Wraps</h2>
                  <p> Healthy and natural method to cleanse and exfoliate your entire body </p>
                </div>
                <div styleName="pop-service-arrow">
                  <img src="img/arrow-icon.png" alt="arrow icon"/>
                </div>
              </div>
              <div styleName="pop-service-leftrow">
                <div onMouseOver={this.onChangeServiceToFacial}>
                  <h2>Facial Add-On Mask</h2>
                  <p> Massage therapy for relaxation or for a variety of health conditions </p>
                </div>
                <div styleName="pop-service-arrow">
                  <img src="img/arrow-icon.png" alt="arrow icon"/>
                </div>
              </div>
            </div>

            <div styleName="pop-service-middle">
              {this.state.curtService === "massage" &&
                <div>
                  <img src="img/pop-service1.jpg" alt="massage"/>
                  <p>Massage therapy for relaxation or for a variety of health conditions</p>
                </div>
              }

              {this.state.curtService === "scrubs-and-wraps" &&
                <div>
                  <img src="img/pop-service2.jpg" alt="scrubs-and-wraps"/>
                  <p>A healthy and natural method to cleanse and exfoliate your entire body</p>
                </div>
              }

              {this.state.curtService === "facial-add-on-mask" &&
                <div>
                  <img src="img/pop-service3.jpg" alt="facial-add-on-mask"/>
                  <p>Nutrient rich mask detoxes facial pores, purges out toxins, leaves your complexion fresh and pure.</p>
                </div>
              }

              {this.state.curtService === "body-treatment" &&
                <div>
                  <img src="img/pop-service4.jpg" alt="body-treatment"/>
                  <p>Slim and tighten any area of your body, giving your skin an even deeper cleanse.</p>
                </div>
              }

              {this.state.curtService === "pernament-makeup" &&
                <div>
                  <img src="img/pop-service5.jpg" alt="pernament-makeup"/>
                  <p>This revolutionary method of applying micro insertions of natural pigments into dermal layers of the skin</p>
                </div>
              }

              {this.state.curtService === "package-services" &&
                <div>
                  <img src="img/pop-service6.jpg" alt="package-services"/>
                  <p>Pamper yourself with one of our lovely spa packages to enhance your skin’s properties for the face and body.</p>
                </div>
              }
            </div>

            <div styleName="pop-service-right">
              <div styleName="pop-service-rightrow">
                <div styleName="pop-service-arrow-reverse">
                  <img src="img/arrow-icon.png" alt="arrow icon"/>
                </div>
                <div onMouseOver={this.onChangeServiceToBody}>
                  <h2>Body Treatment</h2>
                  <p> Relieves muscle tension, improves blood circulation and lymphatic drainage </p>
                </div>
              </div>
              <div styleName="pop-service-rightrow">
                <div styleName="pop-service-arrow-reverse">
                  <img src="img/arrow-icon.png" alt="arrow icon"/>
                </div>
                <div onMouseOver={this.onChangeServiceToPermanent}>
                  <h2>Permanent Make-up</h2>
                  <p> Freedom from daily makeup application using micro insertions</p>
                </div>
              </div>
              <div styleName="pop-service-rightrow">
                <div styleName="pop-service-arrow-reverse">
                  <img src="img/arrow-icon.png" alt="arrow icon"/>
                </div>
                <div onMouseOver={this.onChangeServiceToPackage}>
                  <h2>Package Services</h2>
                  <p> Spa packages that provides treatments to enhance your skin’s properties </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default cssModules(PopService, styles);
