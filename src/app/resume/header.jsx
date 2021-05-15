import React, { Component } from "react";
import Navbar from "../layout/navbar";
import ResumeBanner from "../resume/resumeBanner";
class ResumeHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <section className="header" id="header">
                 
                        <Navbar navData={this.props.navbar}  />
                   
                        <ResumeBanner bannerObj={this.props.bannerData} />

                </section>

            </React.Fragment>
        );
    }
}
export default ResumeHeader;
