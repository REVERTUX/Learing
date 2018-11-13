import React, { Component } from "react";
import ListItem from "./ListItem";
import Header from "./Header";
import Search from "./GlobalSearch";
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      isLoading: true,
      checkboxLang: false,
      checkboxeDel: false,
      search: "",
      engWord: "",
      invalidValue: false,
      showHideSidenav: "hidden"
    };
  }

  componentDidMount() {
    this.getWords();
  }

  getWords = () => {
    this.setState({ isLoading: true });
    fetch("/showWords", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        table: this.props.table
      })
    }).then(res => {
      if (res.ok) {
        res.json().then(words =>
          this.setState({
            words: words,
            isLoading: false
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
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    this.state.words.map(word => {
      if (word.EngWord === this.state.engWord) {
        e.preventDefault();
        this.setState({
          invalidValue: true
        });
      }
    });
  };

  render() {
    const {
      words,
      isLoading,
      checkboxDel,
      checkboxLang,
      search,
      invalidValue,
      showHideSidenav
    } = this.state;
    const { header, table } = this.props;
    return (
      <React.Fragment>
        <Header
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          header={header}
          table={table}
          invalidValue={invalidValue}
          showHideSidenav={showHideSidenav}
        />
        <div className="content">
          <div className="words-list">
            <ListItem
              words={words}
              isLoading={isLoading}
              checkboxLang={checkboxLang}
              checkboxDel={checkboxDel}
              search={search}
              table={table}
            />
          </div>
          {/* <button className="search-btn" onClick={this.handleClick}>
            Toogle global search
          </button> */}
          <Search />
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
