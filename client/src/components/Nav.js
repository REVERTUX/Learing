import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/body">Body</Link>
          </li>
          <li>
            <Link to="/things">Things</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/character_traits">Character traits</Link>
          </li>
          <li>
            <Link to="/phrases">Phrases</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
