import React, { Component } from "react";
import data from "../../../assets/data/data.json";

class ShortSidebarProfile extends Component {
  state = {};

  getFullName(profile) {
    let fullName = "";
    if (profile.firstName !== undefined && profile.firstName !== null) {
      fullName += profile.firstName + " ";

      fullName +=
        profile.lastName !== undefined && profile.lastName !== null
          ? profile.lastName
          : "";
    }
    return fullName;
  }
  render() {
    const profile = data.profile;
    return (
      <React.Fragment>
        <div className="side-profile d-flex flex-column justify-content-center  align-items-center pt-3 pb-5 mb-5">
          <p className="profile-name m-0">{this.getFullName(profile)}</p>
          <p className="profile-email m-0 mt-1 mb-2">{profile.email}</p>
          <div className="profile-img-container  d-flex flex-row justify-content-center">
            <div className="profile-img-wrapper">
              <img
                alt="asda"
                src={require("../../../assets/images/" +
                  profile.userName +
                  ".jpg")}
                className="mini-avatar"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ShortSidebarProfile;
