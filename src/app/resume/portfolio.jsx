import React, { Component } from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
class ResumePortfolio extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    
    let tablistDetails = Object.keys(this.props.portfolio).map((item,i)=>{   

        let tablistDetailsItems = this.props.portfolio[item].map((pItem, j) => { 
            if(item == "projects" ){
                let tablistDetailsItems = '';
                if( pItem.technnologies!=undefined){
                    tablistDetailsItems = pItem.technnologies.map((projectItem, p) => { 
                        return(    
                             <span className={'project-tech-pill badge badge-pill badge-'+projectItem.class + '  px-3 ml-2'}>{projectItem.name}</span>
                             )
                    });
                }
               

                return(               
                    <div className="col-12 col-md-6 col-sm-6 col-xs-12 col-lg-4 portfolio-item mb-3">
                    <div className={'card rounded-0 '+pItem.BorderClass}>
                      <div className="card-body">
                      <div><span>Project Name </span> : <span className={'project-title text-'+pItem.titleClass}>{pItem.name}</span></div>
                      <div><span>Technologies </span> : {tablistDetailsItems}</div>
                      </div>
                    </div>
                </div>
                );
            }else{
                return(               
                    <div className="col-12 col-md-3 col-sm-6 col-xs-12 portfolio-item mb-3">
                    <div class="card-img card">
                        <figure class="hover-effect">
                            <img class="img-responsive" src={pItem.img} alt="" />
                        </figure>
                    </div>
                </div>
                );
            }

           

        });
        let seeMoreForGallery =  ( <div className="row justify-content-end" >
        <div className="col-6">
            <a href="/gallery" className="float-right mb-2">See more</a>

            {/* <Link  className="nav-link" to={{
              pathname: "/",   
            }}>
            {this.props.displayName}
          </Link> */}
        </div>
    </div>)
               
        
       // seeMoreForGallery = item == 'photography' ? seeMoreForGallery:null;
        return(
            <Tab  eventKey={item} title={item} tabClassName="row">                
                {item == 'photography' ? seeMoreForGallery:null}
                <div className="row">
              
                {tablistDetailsItems}
                </div>
              
                </Tab >
        )
    });
  
    return (
      <React.Fragment>
        <section className="section portfolio" id="portfolio">
                                <h4 class="text-uppercase text-center">portfolio</h4>
                                <div class="container">

                                    <div class="row inner-container">
                                        <div class="col-12">
                                            <Tabs defaultActiveKey="projects" id="uncontrolled-tab-example" >
                                            {tablistDetails}

                                            </Tabs>
                                          
                                           
                                        </div>


                                    </div>


                                </div>
                            </section>
                                             
        </React.Fragment>
    );
  }
}
export default ResumePortfolio;
