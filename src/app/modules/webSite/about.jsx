import React, { Component } from "react";
class About extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <React.Fragment>
        <div className="page about">
          <div className="col-12 p-0 ">
            <div
              className="  about-top carousel p-3"
              style={{
                background:
                  "url(" +
                  require("../../../assets/images/bg_tech-03.jpg") +
                  ") no-repeat top",
                backgroundSize: "cover"
              }}
            >
              <div className="inner-txt">
                <h1 className="text-light slider-txt animated animatedFadeInUp fadeInUp">
                  Hi! <br />
                  I'm Nageshwar
                </h1>
                <h3 className="text-light mb-4 slider-txt animated animatedFadeInUp fadeInUp">
                  Based in Pune city
                </h3>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default About;
