import React, { Component } from "react";
import { Link } from "react-router-dom";

import DivNav from "../../styledComponent/nav/Div/DivNav";

class NavSub extends Component {
  render() {
    return (
      <DivNav>
        <ul>
          <li>
            <Link to="/dictionary/adjectives">Adjectives</Link>
          </li>
          <li>
            <Link to="/dictionary/nouns">Nouns</Link>
          </li>
          <li>
            <Link to="/dictionary/verbs">Verbs</Link>
          </li>
          <li>
            <Link to="/dictionary/adverbs_and_other">Adverbs and other</Link>
          </li>
          <li>
            <Link to="/dictionary/phrases">Phrases</Link>
          </li>
        </ul>
      </DivNav>
    );
  }
}

export default NavSub;
