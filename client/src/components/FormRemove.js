import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class FormRemove extends Component {
  render() {
    const { searches, fetching, words, table } = this.props;
    return (
      <React.Fragment>
        {!fetching &&
          words.map(words => (
            <li
              className={
                searches
                  ? words.EngWord.includes(searches)
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

FormRemove.propTypes = {
  words: PropTypes.array.isRequired,
  fetching: PropTypes.bool.isRequired,
  searches: PropTypes.string.isRequired,
  table: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  words: state.words.items,
  fetching: state.words.fetching,
  table: state.words.currentTable,
  searches: state.list.searches
});

export default connect(mapStateToProps)(FormRemove);
