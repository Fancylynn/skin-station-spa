import NavBar from "./NavBar";
import Footer from "./Footer";
import BackIcon from "./BackIcon";
import React, {Component} from "react";

class Layout extends Component {
  state = {
    width: window.innerWidth
  }

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

  render() {
    return (
      <div>
        <NavBar/>
        {this.props.children}
        <Footer/>
        {this.state.width > 768 && <BackIcon/>}
      </div>
    );
  }
}

export default Layout;
