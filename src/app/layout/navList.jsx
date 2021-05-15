import React, { Component } from "react";
import NavListItem from "./navListItem";
class NavList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNavItemId: 0
    };
  }
  navItemClick = index => {
    this.setState({ activeNavItemId: index });
  };
  render() {
    let navbar = this.props.navItems;
    const navItems = navbar.map((item, i) => {
      let activeClass = i === this.state.activeNavItemId ? "active" : "";
      return (
        <NavListItem
          key={i}
          index={i}
          displayName={item.displayName}
          title={item.displayName}
          activeClass={activeClass}
          path={item.path}
          onClick={() => this.navItemClick(i)}
        />       
      );
    });
    return <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">{navItems}</ul>;
  }
}
export default NavList;
