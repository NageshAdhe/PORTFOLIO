import React, { Component } from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
class ResumeInterest extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let itemLists = this.props.interests;
    const interestItems = itemLists.map((item, i) => {  

      const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3" className={item.popOverClassName}>{item.popOverHeading}</Popover.Title>
          <Popover.Content>
          {item.description}
          </Popover.Content>
        </Popover>
      );
       
        return( 
          <OverlayTrigger trigger="hover" placement="auto" overlay={popover}>
        <div className="col-12 col-md-3 col-sm-6 col-xs-12 portfolio-item mb-3">
            <div className="card-img card card" >
                <figure className="hover-effect">
                    <img className="img-responsive" src={item.img} alt="" ></img>
                </figure>
                <h6 className="text-capitalize text-center m-0 p-2 py-3">{item.title}</h6>
            </div>
        </div>
        </OverlayTrigger>
        );

    });
    return (
      <React.Fragment>
           <section className="section interest" id="interest">
                                <h4 className="text-uppercase text-center">Interest</h4>
                                <div className="container">
                                    <div className="row inner-conatiner">
                                   {interestItems}
                                </div>
                                </div>
                            </section>

        </React.Fragment>
    );
  }
}
export default ResumeInterest;
