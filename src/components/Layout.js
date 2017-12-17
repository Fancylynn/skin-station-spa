import NavBar from "./NavBar";
import Footer from "./Footer";
import BackIcon from "./BackIcon";
import React, {Component} from "react";

class Layout extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        {this.props.children}
        <Footer/>
        <BackIcon/>
      </div>
    );
  }
}

export default Layout;
