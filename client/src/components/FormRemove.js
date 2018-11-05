import React, { Component } from "react";

class FormRemove extends Component {
  render() {
    const { search, isLoading, words } = this.props;
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
                <input
                  type="text"
                  value={words.Id}
                  name="Id"
                  className="hidden-btn"
                />
                <button type="submit" Id={words.Id}>
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
