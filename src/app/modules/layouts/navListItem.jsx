import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNavItemId: 0
    };
  }
  // navItemClick = index => {
  //   this.setState((state, props) => ({
  //     activeNavItemId: index
  //   }));
  //   this.setState({ activeNavItemId: index });
  // };

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    // let activeClass =
    //   this.props.index === this.state.activeNavItemId ? "active" : "";

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
