import React, { Component } from "react";

import Layout from "../layout/LayoutActiveLearning";
import Input from "./../styledComponent/Input/InputModifi";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  fetchAllWords,
  splitEng,
  splitPol,
  handleClick,
  setLength
} from "./../actions/allWordsAction";

class ActiveLearning extends Component {
  componentWillMount() {
    const {
      tables,
      allItems,
      fetchAllWords,
      splitEng,
      splitPol,
      setLength
    } = this.props;
    if (allItems.length === 0) {
      tables.map(tab => {
        fetchAllWords(tab);
      });
    }
    setLength(allItems);
    splitEng(allItems);
    splitPol(allItems);
  }

  converseArray = array => {
    let arr = array.filter((ele, i) => {
      return this.props.currentIndex === i;
    });
    // console.log(arr);
    return arr;
  };

  handleInputChange = e => {
    console.log(e.target.value);
    if (e.target.value) {
      e.target.nextSibling.focus();
    }
  };

  handleInputKeyDown = e => {
    if (e.keyCode === 8) {
      e.target.value = "";
      e.target.previousSibling.focus();
    }
  };

  handleInputFocus = e => {
    if (e.target.value) {
      e.target.select();
    }
  };

  handleInputClick = e => {
    if (e.target.name === "oneLetter") {
      e.target.select();
    }
  };

  render() {
    const { engWords, polWords, fetched } = this.props;
    let array = [];
    let array1 = [];
    if (fetched) {
      array = this.converseArray(engWords);
      array1 = this.converseArray(polWords);
      console.log(array);
    }

    return (
      <Layout>
        <label htmlFor="">Type:</label>
        {fetched &&
          array.map(array =>
            array.map((ele, i) => (
              <Input
                type="text"
                name="oneLetter"
                key={i}
                id={ele}
                maxLength="1"
                onChange={this.handleInputChange}
                onClick={this.handleInputClick}
                onFocus={this.handleInputFocus}
                onKeyDown={this.handleInputKeyDown}
              />
            ))
          )}
        <button onClick={this.props.handleClick} name="check">
          Check
        </button>
        <button onClick={this.props.handleClick} name="next">
          Next
        </button>
        {fetched && array1.map((array, i) => <div key={i}>{array}</div>)}
      </Layout>
    );
    // } else {
    //   return (
    //     <Layout>
    //       <button onClick={this.handleClick} name="check">
    //         Check
    //       </button>
    //       <button onClick={this.handleClick} name="next">
    //         Next
    //       </button>
    //     </Layout>
    //   );
    // }
  }
}

ActiveLearning.propTypes = {
  fetchAllWords: PropTypes.func.isRequired,
  splitEng: PropTypes.func.isRequired,
  splitPol: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  setLength: PropTypes.func.isRequired,
  allItems: PropTypes.array.isRequired,
  tables: PropTypes.array.isRequired,
  fetched: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  allItems: state.allWords.allItems,
  fetched: state.allWords.fetched,
  tables: state.list.tables,
  polWords: state.allWords.polWordsSplitted,
  engWords: state.allWords.engWordsSplitted,
  currentIndex: state.allWords.currentIndex
});

export default connect(
  mapStateToProps,
  {
    fetchAllWords,
    splitEng,
    splitPol,
    handleClick,
    setLength
  }
)(ActiveLearning);

// {this.state.words.map((array, i) => {
//   if (this.state.index === i) {
//     array.map(ele => {
//       return (
//         <div>
//           <Input
//             type="text"
//             name="oneLetter"
//             key={ele}
//             id={ele}
//             maxLength="1"
//             onChange={this.handleInputChange}
//             onClick={this.handleClick}
//             onFocus={this.handleInputFocus}
//             onKeyDown={this.handleInputKeyDown}
//           />
//         </div>
//       );
//     });
//   }
// })}
