import React, { Component } from "react";
class SkillItem extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <React.Fragment>
        <div className="card card-sm rounded-0 b-b-2-blue p-2">
          <div className="round-progress" data-percentage={this.props.skillItem.percentage}>
            <span className="progress-left">
              <span className="progress-bar" />
            </span>
            <span className="progress-right">
              <span className="progress-bar" />
            </span>
            <div className="progress-value">
              <div>
              {this.props.skillItem.percentage}%<br />
                <span>{this.props.skillItem.name}</span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default SkillItem;
