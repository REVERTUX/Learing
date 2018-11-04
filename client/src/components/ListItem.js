import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  handleClick = () => {
    this.setState({ active: !this.state.active });
  };

  capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    const { lang, Id, words, checkboxActive } = this.props;
    if (checkboxActive) {
      return (
        <React.Fragment>
          {lang === "pl" && (
            <li
              key={Id}
              onClick={this.handleClick}
              className={`${this.state.active ? null : "hidden-li"} ${
                this.props.hidden
              }
              `}
            >
              {this.capitalizeFirstLetter(words)}
            </li>
          )}
          {lang === "eng" && (
            <li key={Id} className={this.props.hidden}>
              {this.capitalizeFirstLetter(words)}
            </li>
          )}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {lang === "pl" && (
            <li key={Id} className={this.props.hidden}>
              {this.capitalizeFirstLetter(words)}
            </li>
          )}
          {lang === "eng" && (
            <li
              key={Id}
              onClick={this.handleClick}
              className={`${this.state.active ? null : "hidden-li"} ${
                this.props.hidden
              }
              `}
            >
              {this.capitalizeFirstLetter(words)}
            </li>
          )}
        </React.Fragment>
      );
    }
  }
}
export default ListItem;
