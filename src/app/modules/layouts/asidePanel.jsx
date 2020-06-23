import React, { Component } from "react";
class AsidePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      sidePanelClass: ""
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
    if (
      !this.refs.root.contains(e.target) &&
      this.state.sidePanelClass === "open"
    ) {
      this.setState(state => ({
        sidePanelClass: ""
      }));
    }
  }

  handleClick(e) {
    e.stopPropagation();
    this.setState(state => ({
      isToggleOn: true
    }));

    this.setState(state => ({
      sidePanelClass: "open"
    }));
  }

  render() {
    return (
      <div className="aside-wrapper" ref="root">
        <button
          className="btn rounded-0 btn-light theme-setting-btn"
          onClick={this.handleClick}
        >
          <span className="icon-settings" />
        </button>
        <div
          className={
            "aside-panel right-positioned " + this.state.sidePanelClass
          }
        >
          <div className="aside-container">
            <div className="header">
              <span className="title">Header</span>
              <button className="btn close" />
            </div>
            <form>
              <div className="form-group group-navbar">
                <h2>Navbar</h2>
                <div className="form-group-container">xzXZX</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default AsidePanel;
