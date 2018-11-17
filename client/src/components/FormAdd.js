import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { handleInputChange, setInvalidValue } from "./../actions/listActions";

class FormAdd extends Component {
  handleSubmit = e => {
    const { words, engWord, setInvalidValue } = this.props;
    words.map(word => {
      if (word.EngWord === engWord) {
        e.preventDefault();
        setInvalidValue(true);
      }
    });
  };

  render() {
    const { table, handleInputChange, invalidValue } = this.props;
    return (
      <form action="http://localhost:3001/addNewWord" method="POST">
        <label htmlFor="eng">Eng: </label>
        <input
          type="text"
          name="engWord"
          id="eng"
          onChange={handleInputChange}
        />
        <label htmlFor="pol">Pol: </label>
        <input type="text" name="polWord" id="pol" />
        <input type="hidden" name="table" value={table} />
        <button type="submit" onClick={this.handleSubmit}>
          Add
        </button>
        <div className={invalidValue ? "invalidValue" : "hidden"}>
          Invalid value
        </div>
      </form>
    );
  }
}

FormAdd.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  setInvalidValue: PropTypes.func.isRequired,
  words: PropTypes.array.isRequired,
  searches: PropTypes.string.isRequired,
  engWord: PropTypes.string.isRequired,
  table: PropTypes.string.isRequired,
  invalidValue: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  words: state.words.items,
  table: state.words.currentTable,
  searches: state.list.searches,
  engWord: state.list.engWord,
  invalidValue: state.list.invalidValue
});

export default connect(
  mapStateToProps,
  { handleInputChange, setInvalidValue }
)(FormAdd);
