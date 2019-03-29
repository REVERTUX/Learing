import React, { Component } from "react";
import ListItem from "./ListItem";
import Search from "./GlobalSearch";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { fetchWords } from "../../actions/wordsActions";

import DivContent from "./../../styledComponent/content/Div/DivContent";

class Content extends Component {
  componentWillMount() {
    const { fetchWords } = this.props;
    fetchWords(this.props.table);
  }

  render() {
    const { fetching } = this.props;
    return (
      <React.Fragment>
        <DivContent>
          <ListItem isLoading={fetching} />
          <Search />
        </DivContent>
      </React.Fragment>
    );
  }
}

Content.propTypes = {
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
)(Content);
