import React, { Component } from "react";
import Form from "./FormAdd";

class Header extends Component {
  render() {
    const {
      header,
      table,
      search,
      invalidValue,
      handleInputChange,
      handleSubmit
    } = this.props;
    return (
      <div className="header">
        <h1>{header}</h1>
        <div className="fixed-checkbox">
          <label htmlFor="checkbox">pl/eng</label>
          <input
            type="checkbox"
            onChange={handleInputChange}
            id="checkbox"
            name="checkboxLang"
          />
          <label htmlFor="checkbox-btn">del-btn</label>
          <input
            type="checkbox"
            onChange={handleInputChange}
            id="checkbox-btn"
            name="checkboxDel"
          />
        </div>
        <div className="search">
          <label htmlFor="">Search: </label>
          <input
            type="search"
            name="search"
            onChange={handleInputChange}
            value={search}
          />
        </div>
        <Form
          table={table}
          invalidValue={invalidValue}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </div>
    );
  }
}

export default Header;
