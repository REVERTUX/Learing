import React, { Component } from "react";
import ListItem from "./ListItem";
import Header from "./Header";
import FormRemove from "./FormRemove";
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      isLoading: true,
      checkboxActive: false,
      search: ""
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
  }

  render() {
    const { words, isLoading, checkboxActive, search } = this.state;
    const { header, table } = this.props;
    return (
      <div className="container">
        <Header
          handleSearchChange={this.handleSearchChange}
          handleCheckboxChange={this.handleCheckboxChange}
          header={header}
          table={table}
        />
        <div className="content">
          <ListItem
            words={words}
            isLoading={isLoading}
            checkboxActive={checkboxActive}
            search={search}
            table={table}
            listType={"verb"}
          />
          <ListItem
            words={words}
            isLoading={isLoading}
            checkboxActive={checkboxActive}
            search={search}
            table={table}
            listType={"noun"}
          />
          <ListItem
            words={words}
            isLoading={isLoading}
            checkboxActive={checkboxActive}
            search={search}
            table={table}
            listType={"adjective"}
          />
          {/* <ol>
            {!isLoading &&
              words.map(words => (
                <ListItem
                  ID={words.ID}
                  words={words.PolWord}
                  type={words.type}
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
          </ol>

          <ul>
            {!isLoading &&
              words.map(words => (
                <ListItem
                  ID={words.ID}
                  words={words.EngWord}
                  type={words.type}
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
            <FormRemove
              isLoading={this.state.isLoading}
              search={search}
              searched={searched}
              words={words}
            />
          </ul> */}
          {/* <ol>
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
          </ol>

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
            <FormRemove
              isLoading={this.state.isLoading}
              search={search}
              searched={searched}
              words={words}
            />
          </ul>
          <ol>
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
          </ol>

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
            <FormRemove
              isLoading={this.state.isLoading}
              search={search}
              searched={searched}
              words={words}
            />
          </ul> */}
        </div>
      </div>
    );
  }
}

export default Layout;
