import React, { Component } from "react";
class ResumeEducation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      let itemLists = this.props.education;
      let educationItems = itemLists.map((item,i)=>{
        return(
            <li class="card timeline-card" >
            <span className="timeline-milestone"><i className="nav-icon icon-graduation" /></span>
            <div class="timeline-content">


                <div class="timeline-header">
                    <h5 class="text-capitalize">{item.course}</h5>
                </div>
                <div class="timeline-body">
                <p class="">{item.name}</p>
                <p class="">{item.startDate} - {item.endDate}</p>
                <p class="">{item.resultLabel} : {item.percentage}</p>
 </div>
               
            </div>
        </li>
        );
      });
    return (
      <React.Fragment>
         <section className="section education" id="education">
                                <h4 class="text-uppercase text-center">education</h4>
                                <div class="container">
                                    <div class="row inner-conatiner">
                                        <div class="col col-md-12 col-sm-12 col-xs-12">
                                            <div class="timeline center-block">
                                                <ul>
                                                   {educationItems}
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
export default ResumeEducation;
