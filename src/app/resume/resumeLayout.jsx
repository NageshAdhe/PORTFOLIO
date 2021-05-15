import React, { Component } from "react";


import ResumeAbout from "./about";
import ResumeWorkExperience from "./workExperience";
import ResumeSkills from "./skills";
import ResumeEducation from "./education";
import ResumePortfolio from "./portfolio";
import ResumeInterest from "./interest";
import ResumeHeader from "./header";
// import ThemeColors from "../../themeColor";



import data from "../../assets/data/data.json";

import {
    BrowserRouter as Router,
    Route,
    //  NavLink,
    Switch
} from "react-router-dom";



class ResumeLayout extends Component {
    constructor(props) {
        super(props);
        // this.toggle = this.toggle.bind(this);
        this.state = {};
    }

    componentDidMount() {
        var el = document.getElementById("portfolioTab");
        const options = {
        }
        
    }

    render() {
        let interestItemsArr = data.interest;
        let skillsItemsArr = data.skills;
        return (
            <React.Fragment>
                <Router>

                    <div className="app-body">

                        <main className="main">
                            <ResumeHeader navbar={data.navbar} bannerData={data.banner} />
                            <ResumeAbout aboutItem={data.about} />
                            <ResumeWorkExperience workExperienceItem={data.workExperience} />
                            <ResumeSkills interestItems={data.skills} />
                            <ResumeEducation educationItem={data.education} />
                            <ResumePortfolio portfoliotItem={data.portfolio} />
                            <ResumeInterest interestItems={interestItemsArr}  />

                        </main>

                    </div>
                </Router>
            </React.Fragment>
        );
    }
}
export default ResumeLayout;
