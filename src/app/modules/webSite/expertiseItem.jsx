import React, { Component } from "react";
class ExpertiseItem extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <React.Fragment>
        <div className="card card-sm rounded-0 b-b-2-blue ">
          <span className="icon">
            <i className="icon-speedometer" />
          </span>
          <h6>Web Development</h6>
        </div>
      </React.Fragment>
    );
  }
}
export default ExpertiseItem;
