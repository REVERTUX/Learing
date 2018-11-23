import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FormRemove from "./FormRemove";
import Item from "./Item";
class ListItem extends Component {
  render() {
    const {
      words,
      allWords,
      searches,
      showAll,
      globalSearch,
      fetching,
      fetchingSearch
    } = this.props;
    if (showAll) {
      return (
        <div className="list">
          <ol>
            {!fetchingSearch &&
              allWords.map(word => (
                <Item
                  ID={word.ID}
                  words={word.PolWord}
                  showAll={showAll}
                  lang="pl"
                  hidden={
                    globalSearch
                      ? word.EngWord.includes(globalSearch)
                        ? null
                        : "hidden"
                      : null
                  }
                />
              ))}
          </ol>

          <ul>
            {!fetchingSearch &&
              allWords.map(word => (
                <Item
                  ID={word.ID}
                  words={word.EngWord}
                  showAll={showAll}
                  lang="eng"
                  hidden={
                    globalSearch
                      ? word.EngWord.includes(globalSearch)
                        ? null
                        : "hidden"
                      : null
                  }
                />
              ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="list">
          <ol>
            {!fetching &&
              words.map(word => (
                <Item
                  ID={word.ID}
                  words={word.PolWord}
                  showAll={showAll}
                  lang="pl"
                  hidden={
                    searches
                      ? word.EngWord.includes(searches)
                        ? null
                        : "hidden"
                      : null
                  }
                />
              ))}
          </ol>

          <ul>
            {!fetching &&
              words.map(word => (
                <Item
                  ID={word.ID}
                  words={word.EngWord}
                  showAll={showAll}
                  lang="eng"
                  hidden={
                    searches
                      ? word.EngWord.includes(searches)
                        ? null
                        : "hidden"
                      : null
                  }
                />
              ))}
          </ul>
          {this.props.showDelBtn && (
            <ul className="btn-list">
              <FormRemove />
            </ul>
          )}
        </div>
      );
    }
  }
}

ListItem.propTypes = {
  allWords: PropTypes.array.isRequired,
  words: PropTypes.array.isRequired,
  showDelBtn: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  fetchingSearch: PropTypes.bool.isRequired,
  searches: PropTypes.string.isRequired,
  globalSearch: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  allWords: state.allWords.allItems,
  fetchingSearch: state.allWords.fetching,
  words: state.words.items,
  fetching: state.words.fetching,
  showDelBtn: state.list.showDelBtn,
  searches: state.list.searches,
  globalSearch: state.list.globalSearch
});

export default connect(mapStateToProps)(ListItem);
