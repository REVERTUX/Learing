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
        path: "/body",
        content: () => <Layout header={"Body"} table={"body"} />
      },
      {
        path: "/things",
        content: () => <Layout header={"Things"} table={"things"} />
      }
    ];
    return (
      <Router>
        <div>
          <Nav />
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={route.content}
            />
          ))}
          {/* <Route exact path="/" component={Layout} />
          <Route path="/about" component={Home} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
