import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./../scss/style.scss";
import Layout from "./Layout";
import Nav from "./Nav";
import Home from "./HomePage";
import Header from "./Header";

class App extends Component {
  render() {
    const routes = [
      {
        path: "/",
        exact: true,
        content: () => <Home />
      },
      {
        path: "/adjectives",
        content: () => <Layout header={"Adjectives"} table={"adjectives"} />
      },
      {
        path: "/nouns",
        content: () => <Layout header={"Nouns"} table={"nouns"} />
      },
      {
        path: "/verbs",
        content: () => <Layout header={"Verbs"} table={"verbs"} />
      },
      {
        path: "/adverbs_and_other",
        content: () => (
          <Layout header={"Adverb and other"} table={"adverbs_and_other"} />
        )
      },
      {
        path: "/phrases",
        content: () => <Layout header={"Phrases"} table={"phrases"} />
      }
    ];
    return (
      <Router>
        <div className="container">
          <Header />
          <Nav />
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={route.content}
            />
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
