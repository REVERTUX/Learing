import React, { Component } from "react";

class FormRemove extends Component {
  render() {
    const { search, isLoading, words, table } = this.props;
    return (
      <React.Fragment>
        {!isLoading &&
          words.map(words => (
            <li
              className={
                search
                  ? words.EngWord.includes(search)
                    ? null
                    : "hidden"
                  : null
              }
            >
              <form action="/removeWord" method="POST">
                <input type="hidden" value={words.ID} name="ID" />
                <input type="hidden" value={table} name="table" />
                <button type="submit" ID={words.ID}>
                  -
                </button>
              </form>
            </li>
          ))}
      </React.Fragment>
    );
  }
}

export default FormRemove;
