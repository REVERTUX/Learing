import React, { Component } from "react";

class FormAdd extends Component {
  render() {
    const { searched } = this.props;
    return (
      <form action="http://localhost:3001/addNewWord" method="POST">
        <label htmlFor="">Eng: </label>
        <input type="text" name="eng" />
        <label htmlFor="">Pol: </label>
        <input type="text" name="pol" id="pol" />
        <input type="text" value={searched} className="hidden" />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default FormAdd;
