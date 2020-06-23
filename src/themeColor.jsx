import React, { Component } from "react";
class ThemeColors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this._handleDocumentClick = this._handleDocumentClick.bind(this);
  }
  componentDidMount() {
    document.addEventListener("click", this._handleDocumentClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this._handleDocumentClick, false);
  }
  _handleDocumentClick(e) {
    if (!this.refs.root.contains(e.target) && this.state.isToggleOn === true) {
      this.setState(state => ({
        isToggleOn: false //!state.isToggleOn
      }));
      this.props.toggler(this.state.isToggleOn);
    }
  }

  handleClick(e) {
    // this.setState({
    //   isToggleOn: !this.state.isToggleOn
    // });
    e.stopPropagation();
    this.setState(state => ({
      isToggleOn: true //!state.isToggleOn
    }));

    this.props.toggler(this.state.isToggleOn);
  }
  render() {
    return (
      <React.Fragment>
        <button
          className="btn rounded-0 btn-light theme-setting-btn"
          onClick={this.handleClick}
          ref="root"
        >
          <span className="icon-settings" />
        </button>
      </React.Fragment>
    );
  }
}
export default ThemeColors;
