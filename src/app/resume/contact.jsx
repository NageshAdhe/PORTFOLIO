import React, { Component } from "react";
class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      let information = this.props.profile.information;
      let socialMedia = this.props.profile.socialMedia;
      let divStyle = {
        backgroundImage: 'url(img/contact-us-background.jpg)',
        backgroundSize: 'cover'
        
    }

    let socialMediaIcons =   socialMedia.map((item,i)=>{  
      return(
        <li className="list-inline-item">
            <a href={item.url} class={'fa fa-'+item.name}></a>
        </li>
      )
    });
      let informationHtml = Object.keys(information).map((item,i)=>{   


        return(
            <div className="col-12 col-md-4 col-lg-4 ">
              <p className="text-uppercase contact-text-label">{item}</p>
              <p className="contact-text-value gray">{information[item]}</p>            
                           
                        </div>
        )
      });
    return (
      <React.Fragment>
        <section className="section contact " id="contact" >
        <h4 class="text-uppercase text-center">Information</h4>
          <div className="container">
              <div className="row inner-container">
                  <div className="col-12 card p-md-4 rounded-0 background-opac-01" style={divStyle}> 
                  <div className="card-body">
                    <div className="row justify-content-center">
                    {informationHtml}
                    </div>
               
                      {/* <p className="contact-text-label">Name</p>
                      <p className="contact-text-value gray">Nageshwar Adhe</p> */}
                      {/* {informationHtml} */}
                  {/* <div className="row justify-content-center">
                            <div className="col-5 col-md-2 ">
                                <span className="">Name</span>
                            </div>
                            <div className="col-1 col-md-1">:                              
                                </div>
                                <div className="col-6 col-md-9">
                                <span>{information.firstName + ' '+information.lastName} </span>
                                </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-5 col-md-2 ">
                                <span className="">Email</span>
                            </div>
                            <div className="col-1 col-md-1">:                              
                                </div>
                                <div className="col-6 col-md-9">
                                <span>{information.email[0]} </span>
                                </div>
                        </div>
                                     */}
                        <div className="row">
                            <div className="col-12">
                            <ul class="social-icon-container text-center list-inline ">
                              {socialMediaIcons}
                              {/* <li className="list-inline-item">
                                <a href="#" class="fa fa-facebook"></a>
                                </li>
                                <li  className="list-inline-item">
                                <a href="#" class="fa fa-twitter"></a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" class="fa fa-linkedin"></a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" class="fa fa-instagram"></a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" class="fa fa-skype"></a>
                                </li> */}
                              </ul>                               
                            </div>
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
export default Contact;
