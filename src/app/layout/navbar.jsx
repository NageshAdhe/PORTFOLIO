import React, { Component } from "react";
import data from "../../assets/data/data.json";
import NavList from "./navList";
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
    console.log("Navar Items=================>",this.props.navbarItems);

    return (
      <React.Fragment>
        <nav className={'navbar navbar-expand fixed-top '+this.props.navData.className}>
       
          <button
            type="button"
            className="d-lg-none navbar-toggler"
            data-sidebar-toggler="true"
            onClick={this.toggleSidenavSm}
          >
            <span className="navbar-toggler-icon" />
          </button>
         
          <NavList navItems={this.props.navData.menu} />
        </nav>
      </React.Fragment>
    );
  }
}
export default Navbar;
//
