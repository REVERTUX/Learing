import React, { Component } from "react";

class Item extends Component {
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
    const { lang, words, checkboxLang, hidden } = this.props;
    if (checkboxLang === true) {
      return (
        <React.Fragment>
          {lang === "pl" && (
            <li onClick={this.handleClick} className={hidden}>
              <p className={this.state.active ? null : "hidden-p"}>
                {this.capitalizeFirstLetter(words)}
              </p>
            </li>
          )}
          {lang === "eng" && (
            <li className={hidden}>
              <p>{this.capitalizeFirstLetter(words)}</p>
            </li>
          )}
        </React.Fragment>
      );
    } else if (checkboxLang === false) {
      return (
        <React.Fragment>
          {lang === "pl" && (
            <li className={hidden}>
              <p>{this.capitalizeFirstLetter(words)}</p>
            </li>
          )}
          {lang === "eng" && (
            <li onClick={this.handleClick} className={hidden}>
              <p className={this.state.active ? null : "hidden-p"}>
                {this.capitalizeFirstLetter(words)}
              </p>
            </li>
          )}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {lang === "pl" && (
            <li className={hidden}>
              <p>{this.capitalizeFirstLetter(words)}</p>
            </li>
          )}
          {lang === "eng" && (
            <li onClick={this.handleClick} className={hidden}>
              <p>{this.capitalizeFirstLetter(words)}</p>
            </li>
          )}
        </React.Fragment>
      );
    }
  }
}
export default Item;
