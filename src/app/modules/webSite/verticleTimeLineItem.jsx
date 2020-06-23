import React, { Component } from "react";
import { Link } from "react-router-dom";
class VerticleTimeLineItem extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <React.Fragment>
        <article
          className="timeline-entry animate-box fadeInLeft animated"
          data-animate-effect="fadeInLeft"
        >
          <div className="timeline-entry-inner">
            <div className="timeline-icon bg-blue">
              <i class="icon-speedometer" />
            </div>
            <div className="timeline-label">
              <h2>
                <Link href="#">Full Stack Developer</Link>{" "}
                <span>2017-2018</span>
              </h2>
              <p>
                Tolerably earnestly middleton extremely distrusts she boy now
                not. Add and offered prepare how cordial two promise. Greatly
                who affixed suppose but enquire compact prepare all put. Added
                forth chief trees but rooms think may.
              </p>
            </div>
          </div>
        </article>
      </React.Fragment>
    );
  }
}
export default VerticleTimeLineItem;
