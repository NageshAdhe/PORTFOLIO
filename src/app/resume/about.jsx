import React, { Component } from "react";
class ResumeAbout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <section className="section" id="about">
          <div className="container">
            <div className="row inner-conatiner">
              <div className="col col-md-12">
                <div id="profile" class="center-block  ">
                  <img src={this.props.aboutItem.profileImg} />
                </div>
                <div id="intro-div" class="card content-wrapper   p-3 pt-2 mt-0">

                  <div className="about-text-div pt-5">

                  <button type="button" className="btn btn-primary">Primary</button>
                    <button type="button" className="btn btn-secondary">Secondary</button>
                    <button type="button" className="btn btn-success">Success</button>
                    <button type="button" className="btn btn-danger">Danger</button>
                    <button type="button" className="btn btn-warning">Warning</button>
                    <button type="button" className="btn btn-info">Info</button>
                    <button type="button" className="btn btn-light">Light</button>
                    <button type="button" className="btn btn-custom-color">custom-color</button>

                    <button type="button" className="btn btn-link">Link</button> 

                    <p class="text-center  pt-4">
                      {this.props.aboutItem.description}
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
