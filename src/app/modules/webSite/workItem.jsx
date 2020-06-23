import React, { Component } from "react";
import { Link } from "react-router-dom";
class WorkItem extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <React.Fragment>
        <div className=" work-item">
          <div
            className="card card-sm  short card-bg-1 rounded-0 "
            style={{
              background:
                "url(" +
                require("../../../assets/images/work-fontend-02.png") +
                ") no-repeat top",
              backgroundSize: "cover"
            }}
          >
            <Link className="link">
              <div class="desc">
                <div class="con">
                  <h6 className="m-0">
                    <span className="text-light">Fontend Development</span>
                  </h6>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default WorkItem;
