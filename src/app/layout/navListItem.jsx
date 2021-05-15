import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        <li
          className={"px-3 nav-item " + this.props.activeClass}
          onClick={this.props.onClick}
        >
          <Link to={this.props.path} className="nav-link">
            {this.props.displayName}
          </Link>
        </li>
      </React.Fragment>
    );
  }
}
export default NavListItem;
