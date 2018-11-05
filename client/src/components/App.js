import React, { Component } from "react";
import Layout from "./Layout";
import "./../scss/style.scss";
import Nav from "./Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    const routes = [
      {
        path: "/",
        exact: true,
        content: () => <Layout header={"Home"} />
      },
      {
        path: "/about",
        content: () => <Layout header={"About"} searched={"about"} />
      },
      {
        path: "/topics",
        content: () => <Layout header={"Topic"} searched={"about"} />
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

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default App;
