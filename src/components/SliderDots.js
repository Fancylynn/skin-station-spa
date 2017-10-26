import React, {Component} from "react";

export default class SliderDots extends Component {
//   constructor(props) {
//     super(props);
//   }
  handleDotClick = (i) => {
    const option = i - this.props.nowLocal;
    this.props.turn(option);
  }
  render() {
    const dotNodes = [];
    const {count, nowLocal} = this.props;
    for(let i = 0; i < count; i++) {
      dotNodes[i] = (
        <span
            key={"dot" + i}
            className={"slider-dot" + (i === nowLocal ? " slider-dot-selected" : "")}
            onClick={this.handleDotClick(i)}
        />
      );
    }
    return (
      <div className="slider-dots-wrap">
        {dotNodes}
      </div>
    );
  }
}
