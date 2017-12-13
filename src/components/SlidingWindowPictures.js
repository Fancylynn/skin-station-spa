import React from "react";
// import {render} from "react-dom";
import Slider from "./Slider";
import cssModules from "react-css-modules";
import styles from "../styles/SlidingWindowPictures.css";

const IMAGE_DATA = [
  {
    src: "img/coverpage1.png",
    alt: "images-1"
  },
  {
    src: "img/coverpage2.jpg",
    alt: "images-2"
  },
  {
    src: "img/coverpage3.jpg",
    alt: "images-3"
  }
];

const SlidingWindowPictures = () => {
  return(
    <div>
      <Slider
          pictures={IMAGE_DATA}
      />
    </div>
  );
};

export default cssModules(SlidingWindowPictures, styles);
