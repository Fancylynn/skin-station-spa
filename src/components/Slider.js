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
    return (
      <div styleName="slide-window" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <SliderItem picture={pictures[this.state.nowLocal]}/>
      </div>
    );
  }
}

export default cssModules(Slider, styles);
{/* <SliderArrows turn={this.pictureMoveForward}/>*/}
/* const arrowsNode = <SliderArrows turn={this.pictureMoveForward}/>;
    const dotsNode = <SliderDots turn={this.pictureMoveForward} count={numberOfPictures} nowLocal={this.state.nowLocal}/>;
    return (
      <div
          onMouseOver={pause ? this.pausePlayPictures : null} onMouseOut={pause ? this.autoPlayPictures : null}
      >
        <ul style={{
          left: -100 * this.state.nowLocal + "%",
          transitionDuration: speed + "s",
          width: this.props.items.length * 100 + "%"
        }}
        >
          {pictureDisplay}
        </ul>
        {arrows ? arrowsNode : null}
        {dots ? dotsNode : null}
      </div>
    );*/

    //  const pictureDisplay = pictures.map((picture, idx) => {
    //   return <SliderItem picture={picture} key={idx}/>;
    // });
