import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form action="http://localhost:3001/addNewWord" method="POST">
        <label htmlFor="">Eng: </label>
        <input type="text" name="eng" />
        <label htmlFor="">Pol: </label>
        <input type="text" name="pol" id="pol" />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default Form;
