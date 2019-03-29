import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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
    const { lang, words, hidden, showAll, changeLang } = this.props;
    if (showAll) {
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
    if (changeLang === true) {
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
    } else if (changeLang === false) {
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
    }
  }
}

Item.propTypes = {
  changeLang: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  changeLang: state.list.changeLang
});

export default connect(mapStateToProps)(Item);
