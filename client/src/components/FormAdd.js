import React, { Component } from "react";

class FormAdd extends Component {
  render() {
    const { searched } = this.props;
    return (
      <form action="http://localhost:3001/addNewWord" method="POST">
        <label htmlFor="">Eng: </label>
        <input type="text" name="eng" id="eng" />
        <label htmlFor="">Pol: </label>
        <input type="text" name="pol" id="pol" />
        <select name="type">
          <option value="verb">Verb</option>
          <option value="noun">Noun</option>
          <option value="adjective">Adjective</option>
        </select>
        <input type="hidden" name="table" value={searched} />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default FormAdd;
