import React, { Component } from "react";
class ResumeAbout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <section className="section about" id="about">
          <div className="container">
            <div className="row inner-conatiner">
              <div className="col col-md-12">
                <div id="profile" class="center-block  profile-img-container">
                  <img src={'img/'+this.props.about.profileImg} />
                </div>
                <div id="intro-div" class="card content-wrapper   p-3 pt-2 mt-0">

                  <div className="about-text-div pt-5">

                    <p class="text-center  pt-4">
                      {this.props.about.description}
                    </p>
                  </div>


                </div>

              </div>
            </div>
          </div>
        </section>

      </React.Fragment>
    );
  }
}
export default ResumeAbout;
