import React, { Component } from "react";
import AppHeader from "./header";
import Sidebar from "./sidebar";
// import ThemeColors from "../../themeColor";
import Asidepanel from "./asidePanel";
import MiddleView from "./middleView";
import "../../../assets/styles/scss/_custom-app.scss";
///import "../../assets/styles/simple-line-icons/simple-line-icons.scss";
class AdminLayout extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {};
  }
  toggle(isSidePanelOpen) {
    console.log(isSidePanelOpen);
    this.setState(
      {
        // asidePanelToggleClass: isSidePanelOpen === true ? "open" : ""
      }
    );
  }

  render() {
    console.log(this.state.asidePanelToggleClass, "In layout render");
    return (
      <React.Fragment>
        <AppHeader />
        <div className="app-body">
          <Sidebar />
          <MiddleView />
          <Asidepanel />
        </div>
      </React.Fragment>
    );
  }
}
export default AdminLayout;
