import React, { Component } from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchAllWords } from "../actions/allWordsAction";
import { handleInputChange, setSideBarValue } from "./../actions/listActions";

class Search extends Component {
  handleClick = e => {
    const {
      sideBar,
      setSideBarValue,
      tables,
      allWords,
      fetchAllWords
    } = this.props;

    var css = sideBar === "hidden" ? "show" : "hidden";
    setSideBarValue(css);
    if (css === "show" && allWords.length === 0) {
      tables.map(tab => {
        fetchAllWords(tab);
      });
    }
  };

  render() {
    const { handleInputChange, sideBar } = this.props;
    return (
      <React.Fragment>
        <button onClick={this.handleClick} className="search-btn">
          Toogle global search
        </button>
        <div className={`${sideBar} search-list`}>
          <div className="search-bar">
            <label htmlFor="globalsearch">Global search: </label>
            <input
              type="search"
              onChange={handleInputChange}
              name="globalSearch"
              id="globalsearch"
            />
          </div>
          <ListItem showAll={true} />
        </div>
      </React.Fragment>
    );
  }
}

Search.propTypes = {
  fetchAllWords: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  allWords: PropTypes.array.isRequired,
  tables: PropTypes.array.isRequired,
  fetched: PropTypes.bool.isRequired,
  sideBar: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  allWords: state.allWords.allItems,
  fetched: state.allWords.fetched,
  sideBar: state.list.sideBar,
  tables: state.list.tables
});

export default connect(
  mapStateToProps,
  { fetchAllWords, handleInputChange, setSideBarValue }
)(Search);
