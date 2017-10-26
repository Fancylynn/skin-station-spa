import React, {Component, PropTypes} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/SlidingWindowPictures.css";

class SliderItem extends Component {
  static propTypes = {
    pictures: PropTypes.any.isRequired
  };

  render() {
    const {pictures} = this.props;
    const imgs = pictures.map((picture, idx) => {
      return <img styleName="slider-image" src={picture.src} alt={picture.alt} key={idx} id={"top" + idx}/>;
    });
    return (
      <div styleName="slider-item">
        {imgs}
      </div>
    );
  }
}

export default cssModules(SliderItem, styles);
