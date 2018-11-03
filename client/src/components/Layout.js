import React, { Component } from "react";
import ListItem from "./ListItem";
import { link } from "fs";
import Form from "./Form";
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      isLoading: true
    };
  }
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
    const { words, isLoading } = this.state;
    return (
      <div className="container">
        <h1>Hello!</h1>
        <Form />
        <div className="content">
          <div className="left-side">
            <ul>
              {!isLoading &&
                words.map(words => (
                  <ListItem Id={words.Id} words={words.PolWord} lang="pl" />
                ))}
            </ul>
          </div>
          <div className="right-side">
            <ul>
              {!isLoading &&
                words.map(words => (
                  <ListItem Id={words.Id} words={words.EngWord} lang="eng" />
                ))}
            </ul>
            <ul>
              {!isLoading &&
                words.map(words => (
                  <li>
                    <form action="/removeWord" method="POST">
                      <input
                        type="text"
                        value={words.Id}
                        name="Id"
                        className="hidden"
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
