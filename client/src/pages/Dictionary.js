import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Content from "../components/dictionary/Content";
import NavSub from "../components/dictionary/NavSub";
import Header from "../components/dictionary/Header";

import Layout from "./../layout/LayoutDictionary";

class Dictionary extends Component {
  render() {
    const routes = [
      {
        path: "/dictionary/adjectives",
        content: () => <Content header={"Adjectives"} table={"adjectives"} />
      },
      {
        path: "/dictionary/nouns",
        content: () => <Content header={"Nouns"} table={"nouns"} />
      },
      {
        path: "/dictionary/verbs",
        content: () => <Content header={"Verbs"} table={"verbs"} />
      },
      {
        path: "/dictionary/adverbs_and_other",
        content: () => (
          <Content header={"Adverb and other"} table={"adverbs_and_other"} />
        )
      },
      {
        path: "/dictionary/phrases",
        content: () => <Content header={"Phrases"} table={"phrases"} />
      }
    ];

    return (
      <Router>
        <Layout>
          <Header />
          <NavSub />
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={route.content}
            />
          ))}
        </Layout>
      </Router>
    );
  }
}

export default Dictionary;
