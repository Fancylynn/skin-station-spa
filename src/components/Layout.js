import NavBar from "./NavBar";
import Footer from "./Footer";
import BackIcon from "./BackIcon";
import React, {Component} from "react";
import Modal from "react-modal";
import {connect} from "react-redux";
import {openLogoutPopupWindow} from "../actions/loginAction";

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

  onCancelAndCloseLogoutWindow = () => {
    this.props.openLogoutPopupWindow(false);
  }

  render() {
    return (
      <div>
        <NavBar/>
        {this.props.children}
        <Modal
            isOpen={this.props.openLogoutPopupWindowStatus}
            className="logout-popup-window"
        >
          <h2>Confirm to logout</h2>
          <button>Confirm</button>
          <button>Cancel</button>
        </Modal>
        <Footer/>
        {this.state.width > 768 && <BackIcon/>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    openLogoutPopupWindowStatus: state.loginReducer.openLogoutPopupWindowStatus
  });
};

const mapDispatchToProps = {
  openLogoutPopupWindow
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
