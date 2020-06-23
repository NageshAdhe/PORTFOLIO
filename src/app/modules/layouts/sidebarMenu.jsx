import React, { Component } from "react";
import SidebarMenuItem from "./sidebarMenuItem";
class SidebarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let navbar = this.props.sideMenu;
    const navItems = navbar.map((item, i) => {
      let activeClass = i === this.state.activeNavItemId ? "active" : "";
      return (
        <SidebarMenuItem
          key={i}
          index={i}
          label={item.label}
          item={item}
          activeClass={activeClass}
          onClick={() => this.navItemClick(i)}
        />
      );
    });
    return (
      <ul className={this.props.className}>
        {navItems}
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#/dashboard">
            <i className="nav-icon icon-speedometer" />Dashboard<span className="badge badge-info">NEW</span>
          </a>
        </li>
        <li className="nav-title">Theme </li>
        <li className="nav-item">
          <a className="nav-link" href="#/theme/colors">
            <i className="nav-icon icon-drop" />Colors
          </a>
        </li> */}
      </ul>
    );
  }
}

export default SidebarMenu;
