import React, {Component} from "react";
// import Slider from "./Slider";
import cssModules from "react-css-modules";
import styles from "../styles/SlidingWindowPictures.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const IMAGE_DATA = [
  {
    src: "img/coverpage1.png",
    altText: "images-1",
    caption: "Slide 1"
  },
  {
    src: "img/coverpage2.jpg",
    altText: "images-2",
    caption: "Slide 2"
  },
  {
    src: "img/coverpage3.jpg",
    altText: "images-3",
    caption: "Slide 3"
  }
];

class SlidingWindowPictures extends Component {
  state = {
    activeIndex: 0,
    paused: false,
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

  pause = () => {
    this.setState({paused: true});
  }

  cycle = () => {
    this.setState({paused: false});
  }

  next = () =>{
    const nextIndex = this.state.activeIndex === IMAGE_DATA.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({activeIndex: nextIndex});
  }

  previous = () => {
    if (this.state.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? IMAGE_DATA.length - 1 : this.state.activeIndex - 1;
    this.setState({activeIndex: nextIndex});
  }

  goToIndex = (newIndex) => {
    this.setState({activeIndex: newIndex});
  }

  render() {
    const slides = IMAGE_DATA.map((item, idx) => {
      return (
        <CarouselItem key={idx} src={item.src} altText={item.altText}>
          <img width={this.state.width}src={item.src} alt={item.altText}/>
          {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption}/>*/}
        </CarouselItem>
      );
    });

    return (
        <Carousel
            next={this.next}
            previous={this.previous}
            activeIndex={this.state.activeIndex}
            paused={this.state.paused}
            hoverStart={this.pause}
            hoverEnd={this.cycle}
        >
          {slides}
        </Carousel>
    );
  }
}

export default cssModules(SlidingWindowPictures, styles);
