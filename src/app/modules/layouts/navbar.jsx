import React, { Component } from "react";
import data from "../../../assets/data/data.json";
import NavMenuTop from "./navMenu_top";
import { Link } from "react-router-dom";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //  activeNavItemId: 0
    };
  }
  toggleSidenavLg() {
    document.body.classList.toggle("sidebar-lg-show");
    console.log(document.body.classList);
  }
  toggleSidenavSm() {
    document.body.classList.toggle("sidebar-show");
    console.log(document.body.classList);
  }

  render() {
    let navItemsArr = data.navbar;

    return (
      <React.Fragment>
        <nav className="navbar fixed-top navbar-dark bg-dark p-0">
          <button
            type="button"
            className="d-lg-none navbar-toggler"
            data-sidebar-toggler="true"
            onClick={this.toggleSidenavSm}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link className="navbar-brand mr-auto mr-lg-0" href="#">
            {/* <img
              src="https://coreui.io/react/demo/static/media/logo.406a451a.svg"
              width="89"
              height="25"
              alt="CoreUI Logo"
              className="navbar-brand-full"
            />
            <img
              src="https://coreui.io/react/demo/static/media/sygnet.c8d5c2d9.svg"
              width="30"
              height="30"
              alt="CoreUI Logo"
              className="navbar-brand-minimized"
            /> */}
            P O R T F O L I O
          </Link>
          <button
            type="button"
            className="d-md-down-none navbar-toggler"
            data-sidebar-toggler="true"
            onClick={this.toggleSidenavLg}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <NavMenuTop navItems={navItemsArr} />
        </nav>
      </React.Fragment>
    );
  }
}
export default Navbar;
//
