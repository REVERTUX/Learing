import React, { Component } from "react";
import Form from "./FormAdd";

class Header extends Component {
  render() {
    const { header } = this.props;
    return (
      <div>
        <h1>{header}</h1>
        <div className="fixed-checkbox">
          <label htmlFor="checkbox">pl/eng</label>
          <input
            type="checkbox"
            onChange={this.props.handleCheckboxChange}
            id="checkbox"
          />
        </div>
        <div className="search">
          <label htmlFor="">Search: </label>
          <input
            type="text"
            onChange={this.props.handleSearchChange}
            value={this.props.search}
          />
        </div>
        <Form />
      </div>
    );
  }
}

export default Header;
