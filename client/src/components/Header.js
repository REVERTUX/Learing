import React, { Component } from "react";
import Form from "./FormAdd";

class Header extends Component {
  render() {
    const {
      header,
      table,
      search,
      invalidValue,
      handleCheckboxChange,
      handleSearchChange,
      handleAddChange,
      handleValidClick
    } = this.props;
    return (
      <div>
        <h1>{header}</h1>
        <div className="fixed-checkbox">
          <label htmlFor="checkbox">pl/eng</label>
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
            id="checkbox"
            name="pl/eng"
          />
          <label htmlFor="checkbox-btn">del-btn</label>
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
            id="checkbox-btn"
            name="del"
          />
        </div>
        <div className="search">
          <label htmlFor="">Search: </label>
          <input type="text" onChange={handleSearchChange} value={search} />
        </div>
        <Form
          table={table}
          invalidValue={invalidValue}
          handleAddChange={handleAddChange}
          handleValidClick={handleValidClick}
        />
      </div>
    );
  }
}

export default Header;
