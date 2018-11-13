import React, { Component } from "react";

class FormAdd extends Component {
  render() {
    const { table, invalidValue, handleInputChange, handleSubmit } = this.props;
    return (
      <form action="http://localhost:3001/addNewWord" method="POST">
        <label htmlFor="">Eng: </label>
        <input
          type="text"
          name="engWord"
          id="eng"
          onChange={handleInputChange}
        />
        <label htmlFor="">Pol: </label>
        <input type="text" name="polWord" id="pol" />
        {/* <select name="type">
          <option value="verb">Verb</option>
          <option value="noun">Noun</option>
          <option value="adjective">Adjective</option>
        </select> */}
        <input type="hidden" name="table" value={table} />
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
        <div className={invalidValue ? "invalidValue" : "hidden"}>
          Invalid value
        </div>
      </form>
    );
  }
}

export default FormAdd;
