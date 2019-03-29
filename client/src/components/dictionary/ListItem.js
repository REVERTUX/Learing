import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FormRemove from "./FormRemove";
import Item from "./Item";

import DivList from "./../../styledComponent/content/Div/DivList";
import DivBtnList from "./../../styledComponent/content/Div/DivBtnList";
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
        <DivList>
          <ol>
            {!fetchingSearch &&
              allWords.map(word => (
                <Item
                  id={word.id}
                  words={word.polWord}
                  showAll={showAll}
                  lang="pl"
                  hidden={
                    globalSearch
                      ? word.engWord.includes(globalSearch)
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
                  id={word.id}
                  words={word.engWord}
                  showAll={showAll}
                  lang="eng"
                  hidden={
                    globalSearch
                      ? word.engWord.includes(globalSearch)
                        ? null
                        : "hidden"
                      : null
                  }
                />
              ))}
          </ul>
        </DivList>
      );
    } else {
      return (
        <DivList>
          <ol>
            {!fetching &&
              words.map(word => (
                <Item
                  id={word.id}
                  words={word.polWord}
                  showAll={showAll}
                  lang="pl"
                  hidden={
                    searches
                      ? word.engWord.includes(searches)
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
                  id={word.id}
                  words={word.engWord}
                  showAll={showAll}
                  lang="eng"
                  hidden={
                    searches
                      ? word.engWord.includes(searches)
                        ? null
                        : "hidden"
                      : null
                  }
                />
              ))}
          </ul>
          <DivBtnList>
            {this.props.showDelBtn && (
              <ul>
                <FormRemove />
              </ul>
            )}
          </DivBtnList>
        </DivList>
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
