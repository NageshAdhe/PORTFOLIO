import React, { Component } from "react";
//import { Link } from "react-router-dom";
import SkillItem from "./skillItem";
import ExpertiseItem from "./expertiseItem";
import VerticleTimeLine from "./verticleTimeLine";
import WorkItem from "./workItem";
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="page">
          <div className="row m-0 p-0">
            <div
              className=" col-12 home-top"
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
                <button
                  type="button"
                  className="btn btn-outline-light rounded-0 px-5 animated animatedFadeInUp fadeInUp"
                >
                  Porfolio
                </button>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-8">
                <h5 className="">ABOUT ME </h5>
                <div className="card p-2 px-3">
                  <p>
                    <strong>Hi I'm Jackson Ford</strong> On her way she met a
                    copy. The copy warned the Little Blind Text, that where it
                    came from it would have been rewritten a thousand times and
                    everything that was left from its origin would be the word
                    "and" and the Little Blind Text should turn around and
                    return to its own, safe country.
                  </p>
                </div>
              </div>
              <div className="col-4 expertise">
                <h5 className="">EXPERTISE </h5>
                <div className="row">
                  <div className="col-6  ">
                    <ExpertiseItem className="" />
                  </div>
                  <div className="col-6  ">
                    <ExpertiseItem />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h5 className="">EXPERIENCE </h5>
                <div className="p-2 px-3">
                  <div className="row">
                    <div className="col-md-12">
                      <VerticleTimeLine />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6">
                <h5 className="">SKILLS </h5>
                <div className="row">
                  <div className="col-4  ">
                    <SkillItem />
                  </div>
                  <div className="col-4  ">
                    <SkillItem />
                  </div>
                  <div className="col-4  ">
                    <SkillItem />
                  </div>
                </div>

                <h5 className="">Work </h5>
                <div className="row">
                  <div className="col-4 ">
                    <WorkItem />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <h5 className="">EDUCATION </h5>
                <div className="card p-2 px-3">
                  <p>
                    <strong>Hi I'm Jackson Ford</strong> On her way she met a
                    copy. The copy warned the Little Blind Text, that where it
                    came from it would have been rewritten a thousand times and
                    everything that was left from its origin would be the word
                    "and" and the Little Blind Text should turn around and
                    return to its own, safe country.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
