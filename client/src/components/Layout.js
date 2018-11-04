import React, { Component } from "react";
import ListItem from "./ListItem";
import Form from "./Form";
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      isLoading: true,
      checkboxActive: false,
      search: "",
      hidden: ""
    };
  }
  handleCheckboxChange = e => {
    this.setState({
      checkboxActive: e.target.checked
    });
  };

  handleSearchChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("/showWords").then(res => {
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
  }

  render() {
    const { words, isLoading, checkboxActive, search } = this.state;
    return (
      <div className="container">
        <h1>Hello!</h1>
        <div className="fixed-checkbox">
          <label htmlFor="checkbox">pl/eng</label>
          <input
            type="checkbox"
            onChange={this.handleCheckboxChange}
            id="checkbox"
          />
        </div>
        <div className="search">
          <label htmlFor="">Search: </label>
          <input
            type="text"
            onChange={this.handleSearchChange}
            value={this.state.search}
          />
        </div>
        <Form />
        <div className="content">
          <div className="left-side">
            <ul>
              {!isLoading &&
                words.map(words => (
                  <ListItem
                    Id={words.Id}
                    words={words.PolWord}
                    checkboxActive={checkboxActive}
                    lang="pl"
                    hidden={
                      search
                        ? words.EngWord.includes(search)
                          ? null
                          : "hidden"
                        : null
                    }
                  />
                ))}
            </ul>
          </div>
          <div className="right-side">
            <ul>
              {!isLoading &&
                words.map(words => (
                  <ListItem
                    Id={words.Id}
                    words={words.EngWord}
                    checkboxActive={checkboxActive}
                    lang="eng"
                    hidden={
                      search
                        ? words.EngWord.includes(search)
                          ? null
                          : "hidden"
                        : null
                    }
                  />
                ))}
            </ul>
            <ul className="btn-list">
              {!isLoading &&
                words.map(words => (
                  <li
                    className={
                      search
                        ? words.EngWord.includes(search)
                          ? null
                          : "hidden"
                        : null
                    }
                  >
                    <form action="/removeWord" method="POST">
                      <input
                        type="text"
                        value={words.Id}
                        name="Id"
                        className="hidden-btn"
                      />
                      <button type="submit" Id={words.Id}>
                        -
                      </button>
                    </form>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
