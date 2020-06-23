import React, { Component } from "react";
class SkillItem extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <React.Fragment>
        <div className="card card-sm rounded-0 b-b-2-blue p-2">
          <div className="round-progress" data-percentage="74">
            <span className="progress-left">
              <span className="progress-bar" />
            </span>
            <span className="progress-right">
              <span className="progress-bar" />
            </span>
            <div className="progress-value">
              <div>
                74%<br />
                <span>Jquery</span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default SkillItem;
