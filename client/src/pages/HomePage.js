import React, { Component } from "react";

import Layout from "./../layout/LayoutDictionary";

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <div className="white-text">
          <h1>Home page!</h1>
          <p>
            na -ed kończy się jaki ktoś jest ogólne np. bored - znudzony,
            disappointed - rozczarowany
          </p>
          <p>
            na -ing konczy sie jaki ktoś jest teraz np. boring - nudny,
            disappointing - rozczarowujący
          </p>
        </div>
      </Layout>
    );
  }
}

export default HomePage;
