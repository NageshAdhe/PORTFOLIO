import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";

// Components
import Resume from "./resume";
import ResumeHeader from "./header";
import Gallery from "./gallery";
import NotFound from "../layout/notFound";



// getting json Data from Files
import data from "../../assets/data/data.json";
import navbar from "../../assets/data/navbar.json";
import portfolio from "../../assets/data/portfolio.json";




export const routes = [
    {
      path: "/",
      component: Resume,
      exact: true
    },
    {
      path: "/gallery",
      component: Gallery
    },
    {
        path: "*",
        component: NotFound
      }
]


class ResumeLayout extends Component {
    constructor(props) {
        super(props);
        // this.toggle = this.toggle.bind(this);
        this.state = {
            bannerData:data.banner
        };
    }

    componentDidMount() {
       //
    }

    render() {
        let navbarData = navbar.data;
        let skillsItemsArr = data.skills;
        let portfolioData = portfolio.data;
        return (
            <React.Fragment>
                <Router>

                    <div className="app-body">

                        <main className="main">
                            <ResumeHeader navbar={navbarData} bannerData={data.banner} />
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

                    </div>
                </Router>
            </React.Fragment>
        );
    }
}
export default ResumeLayout;
