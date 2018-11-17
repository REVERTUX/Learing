import React, { Component } from "react";
import ListItem from "./ListItem";
import Search from "./GlobalSearch";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchWords } from "./../actions/wordsActions";

class Layout extends Component {
  componentWillMount() {
    const { fetchWords } = this.props;
    fetchWords(this.props.table);
  }

  render() {
    const { fetching } = this.props;
    return (
      <React.Fragment>
        <div className="content">
          <div className="words-list">
            <ListItem isLoading={fetching} />
          </div>
          <Search />
        </div>
      </React.Fragment>
    );
  }
}

Layout.propTypes = {
  fetchWords: PropTypes.func.isRequired,
  searches: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  fetching: state.words.fetching,
  searches: state.list.searches
});

export default connect(
  mapStateToProps,
  { fetchWords }
)(Layout);
