import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import FormAdd from "./FormAdd";

import { handleInputChange } from "./../actions/listActions";

class Header extends Component {
  render() {
    const { table, searches, handleInputChange } = this.props;
    return (
      <div className="header">
        <h1>{table}</h1>
        <p>asdasd</p>
        <div className="fixed-checkbox">
          <label htmlFor="checkbox">pl/eng</label>
          <input
            type="checkbox"
            onChange={handleInputChange}
            id="checkbox"
            name="changeLang"
          />
          <label htmlFor="checkbox-btn">del-btn</label>
          <input
            type="checkbox"
            onChange={handleInputChange}
            id="checkbox-btn"
            name="showDelBtn"
          />
        </div>
        <div className="search">
          <label htmlFor="search">Search: </label>
          <input
            type="search"
            name="searches"
            id="search"
            onChange={handleInputChange}
            value={searches}
          />
        </div>
        <FormAdd />
      </div>
    );
  }
}

Header.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  searches: PropTypes.string.isRequired,
  table: PropTypes.string.isRequired
};
const mapStateToProps = state => ({
  table: state.words.currentTable,
  searches: state.list.searches
});

export default connect(
  mapStateToProps,
  { handleInputChange }
)(Header);
