import React, {Component, PropTypes} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/SlidingWindowPictures.css";

class SliderItem extends Component {
  static propTypes = {
    picture: PropTypes.any.isRequired
  };

  render() {
    const {picture} = this.props;
    return (
      <div styleName="slider-item">
        <img styleName="slider-image" src={picture.src} alt={picture.alt}/>
      </div>
    );
  }
}

export default cssModules(SliderItem, styles);
