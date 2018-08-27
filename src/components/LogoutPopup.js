import React, {Component} from "react";
import styles from "../styles/LogoutPopup.css";
import cssModules from "react-css-modules";
import Modal from "react-modal";
import {connect} from "react-redux";
import {openLogoutPopupWindow} from "../actions/loginAction";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)"
//   }
// };

class LogoutPopup extends Component {
  onCancelAndCloseLogoutWindow = () => {
    this.props.openLogoutPopupWindow(false);
  }

  render() {
    return (
      <Modal
          isOpen={this.props.openLogoutWindowOrNot}
      >
        <h2>Confirm to logout</h2>
        <button>Confirm</button>
        <button>Cancel</button>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    openLogoutWindowOrNot: state.loginReducer.openLogoutWindowOrNot
  });
};

const mapDispatchToProps = {
  openLogoutPopupWindow
};

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(LogoutPopup, styles));
