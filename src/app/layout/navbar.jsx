import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import data from "../../assets/data/data.json";
import NavList from "./navList";
import { Link } from "react-router-dom";
class AppNavbar extends Component {
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
  componentDidMount(){
    window.addEventListener('scroll', () => {
      let activeClass = ''; 
      var navbar = document.getElementsByClassName("navbar");
        var sticky = navbar[0].offsetTop;
        if (window.pageYOffset > sticky) {
           // navbar[0].classList.add("sticky");
            activeClass = 'sticky';
          } else {
            activeClass = '';
           // navbar[0].classList.remove("sticky");
          }
          this.setState({ activeClass });
    });
}
  render() {   
   

    return (
      <React.Fragment>
        
        <Navbar collapseOnSelect expand="lg"  className={'navbar  navbar-dark navbar-expand-md fixed-top style-1 animated '+this.props.navData.className + ' '+this.state.activeClass}>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* <button
            type="button"
            className="d-lg-none navbar-toggler"
            data-sidebar-toggler="true"
            onClick={this.toggleSidenavSm}
          >
            <span className="navbar-toggler-icon" />
          </button> */}
         <Navbar.Collapse id="responsive-navbar-nav">
            <NavList navItems={this.props.navData.menu} />
          </Navbar.Collapse>
        </Navbar >
      </React.Fragment>
    );
  }
}
export default AppNavbar;
//
