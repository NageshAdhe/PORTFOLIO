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
                    <h5 class="text-capitalize">{item.designation}</h5>
                </div>
                <div class="timeline-body">

                <h5 class="">{item.company} - {item.country}</h5>
                <h5 class="">{item.startDate} - {item.endDate}</h5>


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
                                    <div class="row inner-conatiner">
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
