import React, { Component } from "react";
import Navbar from "./navbar";
class AppHeader extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header className="app-header ">
          <Navbar />
        </header>
      </React.Fragment>
    );
  }
}
export default AppHeader;
