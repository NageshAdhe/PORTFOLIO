import React, { Component } from "react";
import NavListItem from "./navListItem";
class NavMenuTop extends Component {
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
        // <li
        //   className={"px-3 nav-item " + activeClass}
        //   onClick={e => this.navItemClick(i)}
        // >
        //   <a className="nav-link" href="#">
        //     {item.displayName}
        //   </a>
        // </li>
      );
    });
    return <ul className="navbar-nav d-md-down-none mr-auto">{navItems}</ul>;
  }
}
export default NavMenuTop;
