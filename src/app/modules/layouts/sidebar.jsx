import React, { Component } from "react";
import ShortSidebarProfile from "../profile/shortSidebarProfile";
import SidebarMenu from "./sidebarMenu";
import data from "../../../assets/data/data.json";
class Sidebar extends Component {
  state = {};
  render() {
    let sideNavItemsArr = data.sidebarNavItems;
    return (
      <React.Fragment>
        <div className="sidebar">
          <ShortSidebarProfile />

          <div className="sidebarContainer sidebar-nav scrollbar-container ">
            {/* <ul className="nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#/dashboard"
                >
                  <i className="nav-icon icon-speedometer" />Dashboard<span className="badge badge-info">NEW</span>
                </a>
              </li>
              <li className="nav-title">Theme </li>
              <li className="nav-item">
                <a className="nav-link" href="#/theme/colors">
                  <i className="nav-icon icon-drop" />Colors
                </a>
              </li>
            </ul> */}
            <SidebarMenu className={"nav"} sideMenu={sideNavItemsArr} />
          </div>
          <button
            className="sidebar-minimizer mt-auto"
            type="button"
            onClick={this.sidebarMinimize}
          />
        </div>
      </React.Fragment>
    );
  }
  sidebarMinimize() {
    document.body.classList.toggle("sidebar-minimized");
    document.body.classList.toggle("brand-minimized");
  }
}
export default Sidebar;
