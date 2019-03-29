import React, { Component } from "react";
import ListItem from "./ListItem";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchAllWords } from "../../actions/allWordsAction";
import { handleInputChange, setSideBarValue } from "../../actions/listActions";

import Button from "./../../styledComponent/content/Button/Button";
import Input from "./../../styledComponent/Input/Input";
import DivSearch from "./../../styledComponent/content/Div/DivSearch";

class Search extends Component {
  handleClick = e => {
    const {
      sideBar,
      setSideBarValue,
      tables,
      allItems,
      fetchAllWords
    } = this.props;

    var css = sideBar === "hidden" ? "show" : "hidden";
    setSideBarValue(css);
    if (css === "show" && allItems.length === 0) {
      tables.map(tab => {
        fetchAllWords(tab);
      });
    }
  };

  render() {
    const { handleInputChange, sideBar } = this.props;
    return (
      <React.Fragment>
        <Button onClick={this.handleClick}>Toogle global search</Button>
        <DivSearch show={sideBar == "hidden" ? true : false}>
          <div className="search-bar">
            <label htmlFor="globalsearch">Global search: </label>
            <Input
              type="search"
              onChange={handleInputChange}
              name="globalSearch"
              id="globalsearch"
            />
          </div>
          <ListItem showAll={true} />
        </DivSearch>
      </React.Fragment>
    );
  }
}

Search.propTypes = {
  fetchAllWords: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  allItems: PropTypes.array.isRequired,
  tables: PropTypes.array.isRequired,
  fetched: PropTypes.bool.isRequired,
  sideBar: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  allItems: state.allWords.allItems,
  fetched: state.allWords.fetched,
  sideBar: state.list.sideBar,
  tables: state.list.tables
});

export default connect(
  mapStateToProps,
  { fetchAllWords, handleInputChange, setSideBarValue }
)(Search);
