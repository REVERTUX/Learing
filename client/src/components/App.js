import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./../scss/style.scss";
import Layout from "./Layout";
import Nav from "./Nav";
import Home from "./HomePage";

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
      },
      {
        path: "/body",
        content: () => <Layout header={"Body"} table={"body"} />
      },
      {
        path: "/things",
        content: () => <Layout header={"Things"} table={"things"} />
      },
      {
        path: "/features",
        content: () => <Layout header={"Features"} table={"features"} />
      },
      {
        path: "/character_traits",
        content: () => (
          <Layout header={"Character traits"} table={"character_traits"} />
        )
      }
    ];
    return (
      <Router>
        <div className="container">
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
