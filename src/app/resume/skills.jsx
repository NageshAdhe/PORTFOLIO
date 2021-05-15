import React, { Component } from "react";
import SkillItem from "./skillItem";
class ResumeSkills extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      let skillsArr = this.props.interestItems;
      const interestItems = skillsArr.map((item, i) => { 
        return(
            <div className="col-2 ">
            <SkillItem skillItem={item} />
        </div>
        );
    })

    return (
      <React.Fragment>
         
         <section className="section" id="skills" >
                                <h4 class="text-uppercase text-center">Skills</h4>
                                <div class="container">
                                    <div class="row inner-conatiner">
                                    {interestItems}
                                   

                                         </div>
                                </div>
                            </section>

                            
        </React.Fragment>
    );
  }
}
export default ResumeSkills;
