import React, { Component } from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
class ResumePortfolio extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    // let tablist = Object.keys(this.props.portfoliotItem).map((item,i)=>{
    //     let isActiveTab = i==0?'active':'';
    //     return(
    //         <Tab class="tab " eventKey={item} title={item} >


    //             {
                    
    //             }
    //         </Tab>
    //     );
    // });
    let tablistDetails = Object.keys(this.props.portfoliotItem).map((item,i)=>{
      
        let isActiveTab = i==0?'active':'';
        
        let tablistDetailsItems = this.props.portfoliotItem[item].map((pItem, j) => { 
            return(
               
                <div className="col col-md-3 col-sm-6 col-xs-12 portfolio-item">
                <div class="card-img card">
                    <figure class="hover-effect">

                        <img class="img-responsive" src={pItem.img} alt="" />


                    </figure>


                </div>
            </div>
            );

        });
        return(
            <Tab  eventKey={item} title={item} tabClassName="row">
                <div className="row">
                {tablistDetailsItems}
                </div>
              
                </Tab >
        )
    });
  
    return (
      <React.Fragment>
        <section className="section" id="portfolios">
                                <h4 class="text-uppercase text-center">portfolio</h4>
                                <div class="container">

                                    <div class="row inner-conatiner">
                                        <div class="col-12">
                                            <Tabs defaultActiveKey="websites" id="uncontrolled-tab-example" >
                                            {tablistDetails}

                                            </Tabs>
                                          
                                            {/* <ul class="tabs text-center" id="portfolioTab">
                                               
                                               {tablist}

                                            </ul>
                                            {tablistDetails}                                             */}
                                        </div>


                                    </div>


                                </div>
                            </section>
                                             
        </React.Fragment>
    );
  }
}
export default ResumePortfolio;
