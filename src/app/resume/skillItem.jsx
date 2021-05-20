import React, { Component } from "react";
class SkillItem extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    let progressBarColor = this.props.skillItem.progressBarColor;
    let borderBottomColor = this.props.skillItem.borderBottomColor;
    return (
      <React.Fragment>
        <div className={'card card-sm rounded-0  p-2 '+borderBottomColor}>
          <div className="round-progress" data-percentage={this.props.skillItem.percentage}>
            <span className="progress-left">
              <span className={'progress-bar '+progressBarColor} />
            </span>
            <span className="progress-right">
            <span className={'progress-bar '+progressBarColor} />
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
