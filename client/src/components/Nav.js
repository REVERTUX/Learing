import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/adjectives">Adjectives</Link>
          </li>
          <li>
            <Link to="/nouns">Nouns</Link>
          </li>
          <li>
            <Link to="/verbs">Verbs</Link>
          </li>
          <li>
            <Link to="/adverbs_and_other">Adverbs and other</Link>
          </li>
          <li>
            <Link to="/phrases">Phrases</Link>
          </li>
          {/*  */}
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
        </ul>
      </div>
    );
  }
}

export default Nav;
