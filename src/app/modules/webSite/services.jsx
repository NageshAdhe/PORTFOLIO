import React, { Component } from "react";
class Sercvices extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <React.Fragment>
        <div className="page services">
          <div className="row services-top">
            <div className="col-12 ">
              <div
                className="   p-3"
                style={{
                  background:
                    "url(" +
                    require("../../../assets/images/bg_tech-03.jpg") +
                    ") no-repeat top",
                  backgroundSize: "cover"
                }}
              >
                <div className="inner-txt mt-5 mb-5 ml-5">
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
          <div className="row">
            <div className="col-12 ">
              <div className="container">
                <div className="row service-conatiner">
                  <div className="col-4 ">
                    <div class="card card-sm rounded-0 b-b-2-blue ">
                      <span class="icon">
                        <i class="icon-speedometer" />
                      </span>
                      <h6>Web Development</h6>
                    </div>
                  </div>
                  <div className="col-4 ">
                    <div class="card card-sm rounded-0 b-b-2-blue ">
                      <span class="icon">
                        <i class="icon-speedometer" />
                      </span>
                      <h6>Web Development</h6>
                    </div>
                  </div>
                  <div className="col-4 ">
                    <div class="card card-sm rounded-0 b-b-2-blue ">
                      <span class="icon">
                        <i class="icon-speedometer" />
                      </span>
                      <h6>Web Development</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Sercvices;
