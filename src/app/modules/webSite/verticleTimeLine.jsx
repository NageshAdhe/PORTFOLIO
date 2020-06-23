import React, { Component } from "react";
import VerticleTimeLineItem from "./verticleTimeLineItem";
class VerticleTimeLine extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <React.Fragment>
        <div className="timeline-centered">
          <VerticleTimeLineItem />
        </div>
      </React.Fragment>
    );
  }
}
export default VerticleTimeLine;
