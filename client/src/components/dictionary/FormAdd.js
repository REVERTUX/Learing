import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { handleInputChange, setInvalidValue } from "../../actions/listActions";

import Form from "./../../styledComponent/header/Form/Form";
import DivInvalid from "./../../styledComponent/header/Div/DivInvalid";
import Button from "./../../styledComponent/header/Button/Button";
import Input from "./../../styledComponent/Input/Input";

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
      <Form action="http://localhost:3001/addNewWord" method="POST">
        <label htmlFor="eng">Eng: </label>
        <Input
          type="text"
          name="engWord"
          id="eng"
          onChange={handleInputChange}
        />
        <label htmlFor="pol">Pol: </label>
        <Input type="text" name="polWord" id="pol" />
        <Input type="hidden" name="table" value={table} />
        <Button type="submit" onClick={this.handleSubmit}>
          Add
        </Button>
        {invalidValue ? <DivInvalid>Invalid value</DivInvalid> : ""}>
      </Form>
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
