import React, { Component } from "react";
class ResumeBanner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let imgUrl = this.props.bannerObj.backgroundImg ? this.props.bannerObj.bacgroundImg : 'bg_tech-03.jpg';
    let divStyle = {
        backgroundImage: 'url(img/' + imgUrl + ')',
        backgroundSize: 'cover'
        
    }
    return (
      <React.Fragment>
            <div className="row banner-content" >
                        <div
                            className=" col-12 home-top"                             
                        >
                            <div className="inner-txt m-5">
                                <h1 className="text-light slider-txt animated animatedFadeInUp fadeInUp">
                                    {this.props.bannerObj.welcomeText} <br />
                                    {this.props.bannerObj.heading}
                </h1>
                                <h3 className="text-light mb-4 slider-txt animated animatedFadeInUp fadeInUp">
                                {this.props.bannerObj.subHeading}
                                 </h3>
                                
                            </div>
                        </div>
                    </div>
               
        </React.Fragment>
    );
  }
}
export default ResumeBanner;
