import React, { Component } from "react";
import { Link } from "react-router-dom";

import DivNavPage from "./../../styledComponent/nav/Div/DivNavPage";

class NavPage extends Component {
  render() {
    return (
      <DivNavPage>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dictionary">Dictionary</Link>
          </li>
          <li>
            <Link to="/active_learn">Active learn</Link>
          </li>
        </ul>
      </DivNavPage>
    );
  }
}

export default NavPage;
