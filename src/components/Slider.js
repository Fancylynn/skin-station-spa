import React, {Component, PropTypes} from "react";
import SliderItem from "./SliderItem";
import SliderDots from "./SliderDots";
import SliderArrows from "./SliderArrows";
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
    }, 2000);
  }

  pausePlayPictures = () => {
    clearInterval(this.interval);
  }


  render() {
    const {pictures} = this.props;
    const pictureDisplay = pictures.map((picture, idx) => {
      return <SliderItem picture={picture} key={idx}/>;
    });
    return (
      <div styleName="slider-window" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <ul style={{
          left: -100 * this.state.nowLocal + "%"
        }}
        >
          {pictureDisplay}
        </ul>
      </div>
    );
  }
}

export default cssModules(Slider, styles);
{ /* <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <SliderItem picture={pictures[this.state.nowLocal]}/>
</div>*/ }

{ /* <div style={{
          left: -100 * this.state.nowLocal + "%",
          transitionDuration: 2 + "s",
          width: 3 * 100 + "%"
        }}
>*/ }
