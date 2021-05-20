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
        <nav className={'navbar navbar-nav navbar-expand fixed-top style-1 animated '+this.props.navData.className + ' '+this.state.activeClass}>
       
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
