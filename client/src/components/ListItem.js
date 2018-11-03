import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.lang === "pl" && (
          <li key={this.props.Id}>{this.props.words}</li>
        )}
        {this.props.lang === "eng" && (
          <li key={this.props.Id}>{this.props.words}</li>
        )}
      </React.Fragment>
    );
  }
}
export default ListItem;
