import React, {Component, PropTypes} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/SlidingWindowPictures.css";

class SliderDots extends Component {

  static propTypes = {
    pictureMoveForward: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired,
    nowLocal: PropTypes.number.isRequired
  };

  // handleDotClick = (i, total) => {
  //   const option = i - this.props.nowLocal;
  //   this.props.pictureMoveForward(option, total);
  // }

  render() {
    const dotNodes = [];
    const {total, nowLocal} = this.props;
    for(let i = 0; i < total; i++) {
      dotNodes[i] = (
        <span
            key={"dot" + i}
            styleName={i === nowLocal ? "slider-dot-selected" : "slider-dot"}
        />
      );
    }
    return (
      <div styleName="slider-dots-wrap">
        {dotNodes}
      </div>
    );
  }
}

export default cssModules(SliderDots, styles);
