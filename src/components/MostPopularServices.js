import React, {Component, PropTypes} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/MostPopularServices.css";

const POP_SERVICE = [
  {
    id: 1,
    name: "Massage",
    content: "Massage therapy for relaxation or  health conditions",
    image: "img/pop-service1.jpg"
  },
  {
    id: 2,
    name: "Scrubs and Wraps",
    content: "Healthy and natural method to cleanse and exfoliate entire body",
    image: "img/pop-service2.jpg"
  },
  {
    id: 3,
    name: "Facial Add-on Mask",
    content: "Restore your face with magic nature masks",
    image: "img/pop-service3.jpg"
  },
  {
    id: 4,
    name: "Body Treatment",
    content: "Relieves muscle tension and improves blood circulation",
    image: "img/pop-service4.jpg"
  },
  {
    id: 5,
    name: "Permanent Makeup",
    content: "Freedom from daily makeup application using micro insertions",
    image: "img/pop-service5.jpg"
  },
  {
    id: 6,
    name: "Package Services",
    content: "Package treatments to enhance your skin’s properties",
    image: "img/pop-service6.jpg"
  }
];


class PopService extends Component {
  state = {
    curtService: 1,
    width: window.innerWidth
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({width: window.innerWidth});
  }


  onChangeService = (id) => {
    this.setState({curtService: id});
  }

  render() {
    const leftService = POP_SERVICE.slice(0, 3).map((service, idx) => {
      return (
        <div styleName="pop-service-leftrow" key={idx}>
          <div onMouseOver={() => {
            this.onChangeService(service.id);
          }}
          >
            <h2>{service.name}</h2>
            <p>{service.content}</p>
          </div>
          <div styleName="pop-service-arrow">
            <img src="img/arrow-icon.png" alt="arrow icon"/>
          </div>
        </div>
      );
    });

    const rightService = POP_SERVICE.slice(3).map((service, idx) => {
      return (
        <div styleName="pop-service-rightrow" key={idx}>
          <div styleName="pop-service-arrow-reverse">
            <img src="img/arrow-icon.png" alt="arrow icon"/>
          </div>
          <div onMouseOver={() => this.onChangeService(service.id)}>
            <h2>{service.name}</h2>
            <p>{service.content}</p>
          </div>
        </div>
      );
    });

    const middleService = POP_SERVICE.slice(this.state.curtService - 1, this.state.curtService).map((service, idx) => {
      return (
        <div key={idx}>
          <img src={service.image} alt={service.name}/>
          <p>{service.content}</p>
        </div>
      );
    });

    const popServiceMobileLeft = POP_SERVICE.slice(0, 3).map((service, idx) => {
      return (
        <div key={idx}>
          <h4 styleName="pop-service-item-motile-title">{service.name}</h4>
          <p styleName="pop-service-item-motile-content">{service.content}</p>
        </div>
      );
    });

    const popServiceMobileRight = POP_SERVICE.slice(3).map((service, idx) => {
      return (
        <div key={idx}>
          <h4 styleName="pop-service-item-motile-title">{service.name}</h4>
          <p styleName="pop-service-item-motile-content">{service.content}</p>
        </div>
      );
    });

    return(
      <div>
        {this.state.width > 768 ?
          <div styleName="pop-service-container">
            <div styleName="pop-service-row">
              <h1 styleName="pop-service-title">Most Popular Services</h1>
              <div styleName="pop-services-display">
                <div styleName="pop-service-left">
                  {leftService}
                </div>

                <div styleName="pop-service-middle">
                  {middleService}
                </div>

                <div styleName="pop-service-right">
                  {rightService}
                </div>
              </div>
            </div>
          </div>
          :
          <div styleName="pop-service-container-mobile">
            <h2 styleName="pop-service-title-mobile">Most Popular Services</h2>
            <div styleName="pop-services-display-mobile">
              <div styleName="pop-services-display-mobile-items">
                {popServiceMobileLeft}
              </div>
              <div styleName="pop-services-display-mobile-items">
                {popServiceMobileRight}
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default cssModules(PopService, styles);
