import React, {PropTypes, Component} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/NavBar.css";
import * as actions from "../actions/userAction";
import {Link} from "react-router";
import {connect} from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem} from "reactstrap";

class NavBar extends Component {

  state = {
    isOpen: false,
    dropdownOpen: false,
    hasToken: false
  };

  componentWillMount() {
    const token = localStorage.getItem("token");
    if (token !== null && token.length > 0) {
      this.setState({hasToken: true});
    }
    this.props.tryGetUserProfile(token);
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  dropdownToggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


  render() {
    return (
      <div styleName="nav-bar-fixed">
        <Navbar dark expand="md">
          <NavbarBrand href="/">
            <img styleName="logo" src="img/logo-inside.png" alt="logo icon"/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar >
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/" styleName="nav-links">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/services" styleName="nav-links">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/location" styleName="nav-links">Locations</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/reservation" styleName="nav-links">Reservation</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/aboutUs" styleName="nav-links">About Us</NavLink>
              </NavItem>
              <NavItem>
                {this.props.loginStatus !== "success" && !this.state.hasToken ?
                  <NavLink href="/signup" styleName="nav-links">Sign In</NavLink>
                      :
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.dropdownToggle}>
                    <DropdownToggle nav caret color="white">
                          Hi, {this.props.username}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>User Profile</DropdownItem>
                      <DropdownItem>Reservation History</DropdownItem>
                      <DropdownItem>Log Out</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                    }
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    username: state.loginReducer.username,
    loginStatus: state.loginReducer.loginStatus
  });
};

export default connect(mapStateToProps, actions)(cssModules(NavBar, styles));
