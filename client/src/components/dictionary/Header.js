import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import FormAdd from "./FormAdd";

import { handleInputChange } from "../../actions/listActions";

import DivHeader from "../../styledComponent/header/Div/DivHeader";
import DivCheckbox from "../../styledComponent/header/Div/DivCheckbox";
import DivSearch from "../../styledComponent/header/Div/DivSearch";
import Input from "./../../styledComponent/Input/Input";

class Header extends Component {
  render() {
    const { table, searches, handleInputChange } = this.props;
    return (
      <DivHeader>
        <h1>{table}</h1>
        <DivCheckbox>
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
        </DivCheckbox>
        <DivSearch>
          <label htmlFor="search">Search: </label>
          <Input
            type="search"
            name="searches"
            id="search"
            onChange={handleInputChange}
            value={searches}
          />
        </DivSearch>
        <FormAdd />
      </DivHeader>
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
