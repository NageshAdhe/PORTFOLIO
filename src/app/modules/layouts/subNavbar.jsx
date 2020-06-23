import React, { Component } from "react";
class SubNavbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar sub-navbar bg-white shadow-sm">
          <nav className="nav nav-underline">
            <a className="nav-link active" href="#">
              Dashboard
            </a>
            <a className="nav-link" href="#">
              Friends
              <span className="badge badge-pill bg-light align-text-bottom">
                27
              </span>
            </a>
            <a className="nav-link" href="#">
              Explore
            </a>
            <a className="nav-link" href="#">
              Suggestions
            </a>
            <a className="nav-link" href="#">
              Link
            </a>
            <a className="nav-link" href="#">
              Link
            </a>
            <a className="nav-link" href="#">
              Link
            </a>
            <a className="nav-link" href="#">
              Link
            </a>
            <a className="nav-link" href="#">
              Link
            </a>
          </nav>
        </nav>
      </React.Fragment>
    );
  }
}
export default SubNavbar;
