import NavBar from "./NavBar";
import Footer from "./Footer";
import BackIcon from "./BackIcon";
import React, {Component} from "react";
// import Modal from "react-modal";
// import {connect} from "react-redux";
// import {openLogoutPopupWindow} from "../actions/loginAction";
import LogoutPopup from "./LogoutPopup";
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
        <LogoutPopup/>
        <Footer/>
        {this.state.width > 768 && <BackIcon/>}
      </div>
    );
  }
}

export default Layout;
