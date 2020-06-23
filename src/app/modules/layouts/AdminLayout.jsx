import React, { Component } from "react";
import AppHeader from "./header";
import Sidebar from "./sidebar";
// import ThemeColors from "../../themeColor";
import Asidepanel from "./asidePanel";
//import MiddleView from "./middleView";
import "../../../assets/styles/scss/_custom-app.scss";
// import "../../assets/styles/simple-line-icons/simple-line-icons.scss";
import {
  BrowserRouter as Router,
  Route,
  //  NavLink,
  Switch
} from "react-router-dom";

import Home from "../webSite/home";
import About from "../webSite/about";
import NotFound from "../webSite/notFound";
import Dashboard from "../webSite/dashboard";
import Services from "../webSite/services";
import Skills from "../webSite/skills";
import Experience from "../webSite/experience";
import Work from "../webSite/work";
import Education from "../webSite/education";
import Contact from "../webSite/contact";

export const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/dashboard",
    component: Dashboard
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/services",
    component: Services
  },
  {
    path: "/skills",
    component: Skills
  },
  {
    path: "/experience",
    component: Experience
  },
  {
    path: "/work",
    component: Work
  },
  {
    path: "/education",
    component: Education
  },
  {
    path: "/contact",
    component: Contact
  },
  {
    path: "*",
    component: NotFound
  }
];

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
        <Router>
          <AppHeader />
          <div className="app-body">
            <Sidebar />
            <main className="main">
              <Switch>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                  />
                ))}
              </Switch>
            </main>
            <Asidepanel />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}
export default AdminLayout;
