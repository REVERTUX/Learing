import React, { Component } from "react";
import ListItem from "./ListItem";
import Header from "./Header";
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      isLoading: true,
      checkboxLang: false,
      checkboxeDel: false,
      search: "",
      validAdd: "",
      invalidValue: false
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

  handleCheckboxChange = e => {
    if (e.target.name === "pl/eng") {
      this.setState({
        checkboxLang: e.target.checked
      });
    } else {
      this.setState({
        checkboxeDel: e.target.checked
      });
    }
  };

  handleSearchChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleValidClick = e => {
    this.state.words.map(word => {
      if (word.EngWord === this.state.validAdd) {
        e.preventDefault();
        this.setState({
          invalidValue: true
        });
      }
    });
  };

  handleAddChange = e => {
    this.setState({
      validAdd: e.target.value
    });
  };

  render() {
    const {
      words,
      isLoading,
      checkboxLang,
      checkboxeDel,
      search,
      invalidValue
    } = this.state;
    const { header, table } = this.props;
    return (
      <div className="container">
        <Header
          handleSearchChange={this.handleSearchChange}
          handleCheckboxChange={this.handleCheckboxChange}
          handleAddChange={this.handleAddChange}
          handleValidClick={this.handleValidClick}
          header={header}
          table={table}
          invalidValue={invalidValue}
        />
        <div className="content">
          <ListItem
            words={words}
            isLoading={isLoading}
            checkboxLang={checkboxLang}
            checkboxeDel={checkboxeDel}
            search={search}
            table={table}
          />
        </div>
      </div>
    );
  }
}

export default Layout;
