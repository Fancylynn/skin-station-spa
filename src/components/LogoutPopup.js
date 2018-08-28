import React, {Component} from "react";
import styles from "../styles/LogoutPopup.css";
import cssModules from "react-css-modules";
import Modal from "react-modal";
import {connect} from "react-redux";
import {openLogoutPopupWindow, logout} from "../actions/loginAction";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "40%",
    transform: "translate(-50%, -50%)"
  }
};

class LogoutPopup extends Component {
  onCancelAndCloseLogoutWindow = () => {
    this.props.openLogoutPopupWindow(false);
  }

  onLogout = () => {
    this.props.logout();
  }

  render() {
    return (
      <Modal
          isOpen={this.props.openLogoutPopupWindowStatus}
          style={customStyles}
      >
        <h2 styleName="popup-window-title">Confirm to logout</h2>
        <div styleName="popup-window-button-container">
          <button onClick={this.onLogout} styleName="popup-logout-button-logout">Logout</button>
          <button onClick={this.onCancelAndCloseLogoutWindow} styleName="popup-logout-button-stay">Stay</button>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    openLogoutPopupWindowStatus: state.loginReducer.openLogoutPopupWindowStatus
  });
};

const mapDispatchToProps = {
  openLogoutPopupWindow,
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(LogoutPopup, styles));
