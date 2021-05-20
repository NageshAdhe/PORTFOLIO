import React, { Component } from "react";
import AppNavbar from "../layout/navbar";
import ResumeBanner from "../resume/resumeBanner";
class ResumeHeader extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //
        console.log("params=============>",this.props)
     }
    render() {

        let imgUrl = this.props.bannerData.backgroundImg ? this.props.bannerObj.bacgroundImg : 'bg_tech-03.jpg';
        let divStyle = {
            backgroundImage: 'url(/img/' + imgUrl + ')',
            backgroundSize: 'cover',
            backgroundColor:'#242832'
            
        }
            return (
            <React.Fragment>
                <section className="header position-relative" id="header" >
                        <div className=" head-bg banner" style={divStyle}>
                        <AppNavbar navData={this.props.navbar}  />
                   
                        <ResumeBanner bannerObj={this.props.bannerData} />
</div>
                </section>

            </React.Fragment>
        );
    }
}
export default ResumeHeader;
