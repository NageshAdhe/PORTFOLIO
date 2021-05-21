import React, { Component } from "react";
import SkillItem from "./skillItem";
class ResumeSkills extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      let skillsArr = this.props.skills;
      const skillsItems = skillsArr.map((item, i) => { 
        return(
            <div className="col-12 col-md-4 col-lg-3 col-sm-12 mb-3">
            <SkillItem skillItem={item} />
        </div>
        );
    })

    return (
      <React.Fragment>
         
         <section className="section skills" id="skills" >
                                <h4 class="text-uppercase text-center">Skills</h4>
                                <div class="container">
                                    <div class="row inner-container">
                                    {skillsItems}                                  

                                         </div>
                                </div>
                            </section>

                            
        </React.Fragment>
    );
  }
}
export default ResumeSkills;
