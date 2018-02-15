import React, {PropTypes, Component} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/NavBar.css";
import {Link} from "react-router";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

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
      isOpen: false
    };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div styleName="nav-bar-fixed">
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">
            <img styleName="logo" src="img/logo-inside.png" alt="logo icon"/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <div styleName="nav-links">
                <ul>
                  <NavItem>
                    <NavLink><li styleName="link"><Link styleName="links" to="/">Home</Link></li></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink><li styleName="link"><Link styleName="links" to="/services">Services</Link></li></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink><li styleName="link"><Link styleName="links" to="/location">Locations</Link></li></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink><li styleName="link"><Link styleName="links" to="/reservation">Reservation</Link></li></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink><li styleName="link"><Link styleName="links" to="/aboutUs">About Us</Link></li></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink><li styleName="link"><Link styleName="links" to="/signup">Sign In</Link></li></NavLink>
                  </NavItem>
                </ul>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

// NavBar.propTypes = {
//     changeDisplayMode: PropTypes.func.isRequired,
// };

export default cssModules(NavBar, styles);
