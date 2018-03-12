import React, {PropTypes, Component} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/NavBar.css";
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
  /* return(
    <div styleName="nav-bar-fixed">
      <Button color="danger">Danger!</Button>
      <div styleName="nav-bar">
        <ul>
          <li><img styleName="logo" src="img/logo-inside.png" alt="logo icon"/></li>
        </ul>
        <div styleName="nav-links">
          <ul>
            <li><Link styleName="links" to="/">HOME</Link></li>
            <li><Link styleName="links" to="/services">SERVICES</Link></li>
            <li><Link styleName="links" to="/location">LOCATIONS</Link></li>
            <li><Link styleName="links" to="/reservation">RESERVATION</Link></li>
            <li><Link styleName="links" to="/aboutUs">ABOUT US</Link></li>
            <li><Link styleName="links" to="/signup">SIGN IN</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );*/

  state = {
    isOpen: false,
    dropdownOpen: false
  };

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
          <NavbarToggler onClick={this.toggle} color="primary"/>
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
                {this.props.loginStatus !== "success" ?
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

export default connect(mapStateToProps)(cssModules(NavBar, styles));
