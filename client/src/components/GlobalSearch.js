import React, { Component } from "react";
import ListItem from "./ListItem";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      search: "",
      isLoading: true,
      showHideSidenav: "hidden",
      tables: ["adjectives", "nouns", "phrases", "verbs"]
    };
  }

  // componentDidMount() {
  //   this.getWords();
  // }

  getWords = () => {
    this.state.tables.map(tab => {
      this.setState({ isLoading: true });
      fetch("/showWords", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          table: tab
        })
      }).then(res => {
        if (res.ok) {
          res.json().then(words =>
            this.setState({
              words: [...this.state.words, ...words]
            })
          );
        } else {
          console.log(
            "Network request for words.json failed with response " +
              res.status +
              ": " +
              res.statusText
          );
        }
      });
    });
    this.setState({
      isLoading: false
    });
  };

  handleInputChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleClick = e => {
    var css = this.state.showHideSidenav === "hidden" ? "show" : "hidden";
    this.setState({
      showHideSidenav: css
    });
    if (css === "show") {
      this.getWords();
    }
  };

  render() {
    const { words, search, isLoading, showHideSidenav } = this.state;
    return (
      <React.Fragment>
        <button onClick={this.handleClick} className="search-btn">
          Toogle global search
        </button>

        <div className={`${showHideSidenav} search-list`}>
          <div className="search-bar">
            <label htmlFor="">Global search: </label>
            <input
              type="search"
              value={search}
              onChange={this.handleInputChange}
            />
          </div>
          <ListItem
            words={words}
            isLoading={isLoading}
            checkboxLang={null}
            checkboxeDel={false}
            search={search}
            table={"table"}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
