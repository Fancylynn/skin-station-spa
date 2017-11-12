import React, {Component, PropTypes} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/Services.css";

class ServiceItem extends Component {
  static propTypes = {
    pictures: PropTypes.any.isRequired
  };

  render() {
    const {pictures} = this.props;
    const imgs = pictures.map((picture, idx) => {
      return (
        <div styleName="display-item" key={idx} id={"top" + idx}>
          <img styleName="display-img" src={picture.src} alt={picture.alt}/>
          <div styleName="type">
            <span>{picture.type}</span>
          </div>
        </div>
      );
    });

    return (
      <div styleName="services-display">
        {imgs}
      </div>
    );
  }
}

export default cssModules(ServiceItem, styles);
