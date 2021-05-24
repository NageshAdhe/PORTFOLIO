import React, { Component } from "react";
class ResumeWorkExperience extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      let itemLists = this.props.workExperience;
      let expItemList = itemLists.map((item,i)=>{

        return(
            <li class="card timeline-card" >
            <span className="timeline-milestone  "><i className="nav-icon icon-briefcase" /></span>
            <div class="timeline-content">


                <div class="timeline-header">
                    <h6 class="text-capitalize m-0">{item.designation}</h6>
                </div>
                <div class="timeline-body">
                <h6 class="">{item.company} - {item.country}</h6>
                <div className="row">
                <div className="col-12 mb-2">
                <span class="h6 text-purple">{item.project}</span>
                <span class="float-right text-muted">{item.startDate} - {item.endDate}</span>
                </div>
                </div>


                <p class="">
                    {item.description}
</p>
            </div>
            </div>
        </li>
        );
      })
    return (
      <React.Fragment>
            <section className="section experience" id="experience">
                                <h4 class="text-uppercase text-center">Experience</h4>
                                <div class="container">
                                    <div class="row inner-container">
                                        <div class="col col-md-12 col-sm-12 col-xs-12">
                                            <div class="timeline center-block">
                                                <ul>
                                                   {expItemList}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                                           
        </React.Fragment>
    );
  }
}
export default ResumeWorkExperience;
