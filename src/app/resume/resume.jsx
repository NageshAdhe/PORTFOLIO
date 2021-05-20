import React, { Component } from "react";
// Get Components
import ResumeAbout from "./about";
import ResumeWorkExperience from "./workExperience";
import ResumeSkills from "./skills";
import ResumeEducation from "./education";
import ResumePortfolio from "./portfolio";
import ResumeInterest from "./interest";
import Informaiton from "./information";

// Get data From Json Files
import data from "../../assets/data/data.json";
import about from "../../assets/data/about.json";
import workExperience from "../../assets/data/workExperience.json";
import portfolio from "../../assets/data/portfolio.json";
import skills from "../../assets/data/skills.json";
import education from "../../assets/data/education.json";
import interests from "../../assets/data/interests.json";



class Resume extends Component {
    constructor(props) {
        super(props);
     
    }

    componentDidMount() {
        //      
    }

    render() {       
        return (
            <React.Fragment>
                    <ResumeAbout about={about.data} />
                    <ResumeWorkExperience workExperience={workExperience.data} />
                    <ResumeSkills skills={skills.data} />
                    <ResumePortfolio portfolio={portfolio.data} />
                    <ResumeEducation education={education.data} />
                    <ResumeInterest interests={interests.data}  />
                    <Informaiton profile={data.profile}/>
            </React.Fragment>
        );
    }
}
export default Resume;
