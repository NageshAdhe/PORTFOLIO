import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
class NavListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNavItemId: 0
    };
  }
 

  componentDidMount() {}

  componentDidUpdate() {}

  render() {    
    return (
      <React.Fragment>
        <Nav.Link
          className={"px-3 nav-item " + this.props.activeClass}
          onClick={this.props.onClick}
        >
          <a href={this.props.path} className="nav-link">
            {this.props.displayName}
          </a>
        </Nav.Link>
      </React.Fragment>
    );
  }
}
export default NavListItem;
