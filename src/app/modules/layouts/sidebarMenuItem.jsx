import React, { Component } from "react";
import SidebarMenu from "./sidebarMenu";
class SidebarMenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navDropdownOpen: false,
      navItemClass: ""
    };
  }
  getNavItemClass = item => {
    let className = "";
    if (item.children) {
      className = "nav-item nav-dropdown ";
    } else if (item.title) {
      className = "nav-title ";
    } else {
      className = "nav-item ";
    }
    // this.setState({ navItemClass: className });
    return className;
  };
  getNavLinkClass = item => {
    let className = "";
    if (item.children) {
      className = "nav-link nav-dropdown-toggle ";
    } else {
      className = "nav-link ";
    }

    return className;
  };
  navDropdownClick = item => {
    if (item.children && item.children.length > 0) {
      this.setState({ navDropdownOpen: !this.state.navDropdownOpen });
    }
  };
  render() {
    return (
      <li
        className={`  ${this.getNavItemClass(this.props.item)} ${this.state
          .navDropdownOpen
          ? "open"
          : ""} `}
        onClick={() => this.navDropdownClick(this.props.item)}
      >
        {this.props.item.title ? (
          this.props.item.name
        ) : (
          <a
            className={this.getNavLinkClass(this.props.item)}
            aria-current="page"
            href="#/dashboard"
          >
            <i className={"nav-icon " + this.props.item.icon} />
            {this.props.item.label}

            {this.props.item.badge ? (
              <span className={"badge  badge-" + this.props.item.badge.variant}>
                {this.props.item.badge.text}
              </span>
            ) : (
              ""
            )}
          </a>
        )}
        {this.props.item.children ? (
          <SidebarMenu
            className={"nav-dropdown-items"}
            sideMenu={this.props.item.children}
          />
        ) : (
          ""
        )}
      </li>
    );
  }
}
export default SidebarMenuItem;
