import React, {Component, PropTypes} from "react";
import SliderItem from "./SliderItem";
import SliderDots from "./SliderDots";
import cssModules from "react-css-modules";
import styles from "../styles/SlidingWindowPictures.css";

class Slider extends Component {
  static propTypes = {
    pictures: PropTypes.array.isRequired
  };

  state = {
    nowLocal: 0
  };

  componentDidMount() {
    this.autoPlayPictures();
  }

  componentWillUnmount() {
    this.pausePlayPictures();
  }

  mouseOver = () => {
    this.pausePlayPictures();
  }

  mouseOut = () => {
    this.autoPlayPictures();
  }

  pictureMoveForward = (step, numberOfPictures) => {
    let currentNumber = this.state.nowLocal + step;
    if (currentNumber < 0) {
      currentNumber = 0;
    }
    currentNumber %= numberOfPictures;
    this.setState({nowLocal: currentNumber});
  }

  autoPlayPictures = () => {
    const {pictures} = this.props;
    this.interval = setInterval(() => {
      this.pictureMoveForward(1, pictures.length);
    }, 4700);
  }

  pausePlayPictures = () => {
    clearInterval(this.interval);
  }


  render() {
    const {pictures} = this.props;
    const total = pictures.length;
    return (
      <div>
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <SliderItem pictures={pictures}/>
        </div>
        <div styleName="slider-window-dots">
          <SliderDots pictureMoveForward={this.pictureMoveForward} total={total} nowLocal={this.state.nowLocal}/>
        </div>
      </div>
    );
  }
}

export default cssModules(Slider, styles);
{ /* <SliderDots pictureMoveForward={this.pictureMoveForward} total={pictures.length} nowLocal={this.state.nowLocal}/>*/ }
