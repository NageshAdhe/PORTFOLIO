import React, { Component } from "react";
class About1 extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <React.Fragment>
        <div className="page about about-1">
          {/* <div className="row">
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
          </div> */}

          <div className="row about-section align-items-center ">
            <div className="col-lg-6">
              <img
                alt="asda"
                src={require("../../../assets/images/about-3.png")}
                className="about-img"
              />
            </div>
            <div className="col-lg-5 ml-auto section-title">
              <h5>About Me</h5>
              <h3 className="title mb-3  text-info">We Are Expert In Web</h3>
              <p className="mb-4">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <div className="d-flex">
                <ul className="list-unstyled ul-check success mr-5">
                  <li>Design</li>
                  <li>Development</li>
                  <li>eCommerce</li>
                  <li>Mobile Apps</li>
                  <li>Copywriting</li>
                  <li>SEO</li>
                </ul>
              </div>
              <p>
                <a
                  data-fancybox=""
                  data-ratio="2"
                  href="https://vimeo.com/326176805"
                  className="d-flex align-items-center"
                >
                  <span className="icon-play_circle_outline h4 m-0 mr-2" />{" "}
                  <span>Watch the video</span>
                </a>
              </p>
            </div>
          </div>
          <div className="row about-section align-items-center ">
            <div className="col-lg-5 ml-auto section-title">
              <h5>About Me</h5>
              <h3 className="title mb-3  text-info">We Are Expert In Web</h3>
              <p className="mb-4">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <div className="d-flex">
                <ul className="list-unstyled ul-check success mr-5">
                  <li>Design</li>
                  <li>Development</li>
                  <li>eCommerce</li>
                  <li>Mobile Apps</li>
                  <li>Copywriting</li>
                  <li>SEO</li>
                </ul>
              </div>
              <p>
                <a
                  data-fancybox=""
                  data-ratio="2"
                  href="https://vimeo.com/326176805"
                  className="d-flex align-items-center"
                >
                  <span className="icon-play_circle_outline h4 m-0 mr-2" />{" "}
                  <span>Watch the video</span>
                </a>
              </p>
            </div>
            <div className="col-lg-6">
              <img
                alt="asda"
                src={require("../../../assets/images/about-3.png")}
                className="about-img"
              />
            </div>
          </div>
        </div>
        <div className="page about-3">
          <div className="row ">
            <div className="col-12 about-3">
              <div className="about-section row m-5">
                <div className="about-img col-5">
                  <img
                    alt="asda"
                    src={require("../../../assets/images/about-3.png")}
                    className=""
                  />
                  <img
                    alt="asda"
                    src={require("../../../assets/images/about-3-bg.png")}
                    className="ab-3-bg"
                  />
                </div>
                <div className="col-7">
                  <div className="about-single-content card rounded-0 p-3 b-t-2-blue">
                    <h5>About Me</h5>
                    <h2>Designing with the passion while.</h2>
                    <p>
                      Meet my startup design agency Shape Rex Currently I am
                      working at CodeNext as Product Designer. Before that I’ve
                      worked at squlid, Bangladesh as a UX, UI Designer.
                    </p>
                    <p>
                      I love to work in User Experience &amp; User Interface
                      designing. Because I love to solve the design problem and
                      find easy and better solutions to solve it. I always try
                      my best to make good user interface with the best user
                      experience. I have been working as a Visual designer from.{" "}
                    </p>
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
export default About1;
