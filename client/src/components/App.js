import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavPage from "./nav/NavPage";
import Dictionary from "../pages/Dictionary";
import ActiveLearning from "../pages/ActiveLearning";
import Home from "../pages/HomePage";
import Layout from "./../layout/LayoutDictionary";

class App extends Component {
  render() {
    const routes = [
      {
        path: "/",
        exact: true,
        content: () => <Home />
      },
      {
        path: "/dictionary",
        content: () => <Dictionary />
      },
      {
        path: "/active_learn",
        content: () => <ActiveLearning />
      }
    ];
    return (
      <Router>
        <div>
          <Layout>
            <NavPage />
          </Layout>
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
