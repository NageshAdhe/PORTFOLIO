import React, { Component } from "react";
class ResumeInterest extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let itemLists = this.props.interestItems;
    const interestItems = itemLists.map((item, i) => {    
        let imgSrc = item.src;
        return( 
        <div className="col col-md-3 col-sm-6 col-xs-12 portfolio-item">
            <div className="card-img card card" >
                <figure className="hover-effect">
                    <img className="img-responsive" src={item.img} alt="" ></img>
                </figure>
                <h6 className="text-capitalize text-center m-0 p-2 py-3">{item.title}</h6>
            </div>
        </div>
        );

    });
    return (
      <React.Fragment>
           <section className="section" id="interest">
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
