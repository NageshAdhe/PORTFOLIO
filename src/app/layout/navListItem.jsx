import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink
class NavListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNavItemId: 0
    };
  }
 

  componentDidMount() {}

  componentDidUpdate() {}

  handleScroll(name,e) {
    
    e.stopPropagation();  
    const section = document.querySelector('#'+name);
    if(name && section){    
    section.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest"})
    }
    
  }

  render() {    
    return (
      <React.Fragment>
        <Nav.Link
          className={"px-3 nav-item " + this.props.activeClass}
        
          onClick= {(e) => this.handleScroll(this.props.name,e)} 
        >
          <Link  className="nav-link" to={this.props.path}           
            >
            {this.props.displayName}
          
          </Link>


          {/* <Link  className="nav-link" 

            activeClass="active"
            to={this.props.path}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
            {this.props.displayName}
          </Link> */}


        </Nav.Link>
      </React.Fragment>
    );
  }
}
export default NavListItem;
