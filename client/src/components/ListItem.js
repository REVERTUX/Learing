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
    const { lang, ID, words, checkboxActive, hidden, type } = this.props;
    if (checkboxActive) {
      return (
        <React.Fragment>
          {lang === "pl" && (
            <li key={ID} onClick={this.handleClick} className={hidden}>
              <p className={this.state.active ? null : "hidden-p"}>
                {this.capitalizeFirstLetter(words)}
              </p>
            </li>
          )}
          {lang === "eng" && (
            <li key={ID} className={hidden}>
              <p>{this.capitalizeFirstLetter(words)}</p>
            </li>
          )}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {lang === "pl" && (
            <li key={ID} className={hidden}>
              <p>{this.capitalizeFirstLetter(words)}</p>
            </li>
          )}
          {lang === "eng" && (
            <li key={ID} onClick={this.handleClick} className={hidden}>
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
export default ListItem;

{
  /* <ol>
            {!isLoading &&
              words.map(words => (
                <ListItem
                  Id={words.Id}
                  words={words.PolWord}
                  checkboxActive={checkboxActive}
                  lang="pl"
                  hidden={
                    search
                      ? words.EngWord.includes(search)
                        ? null
                        : "hidden"
                      : null
                  }
                />
              ))}
          </ol>

          <ul>
            {!isLoading &&
              words.map(words => (
                <ListItem
                  Id={words.Id}
                  words={words.EngWord}
                  checkboxActive={checkboxActive}
                  lang="eng"
                  hidden={
                    search
                      ? words.EngWord.includes(search)
                        ? null
                        : "hidden"
                      : null
                  }
                />
              ))}
          </ul> */
}
// render() {
//   const { lang, Id, words, checkboxActive, hidden } = this.props;
//   if (checkboxActive) {
//     return (
//       <React.Fragment>
//         {lang === "pl" && (
//           <li key={Id} onClick={this.handleClick} className={hidden}>
//             <p className={this.state.active ? null : "hidden-p"}>
//               {this.capitalizeFirstLetter(words)}
//             </p>
//           </li>
//         )}
//         {lang === "eng" && (
//           <li key={Id} className={hidden}>
//             <p>{this.capitalizeFirstLetter(words)}</p>
//           </li>
//         )}
//       </React.Fragment>
//     );
//   } else {
//     return (
//       <React.Fragment>
//         {lang === "pl" && (
//           <li key={Id} className={hidden}>
//             <p>{this.capitalizeFirstLetter(words)}</p>
//           </li>
//         )}
//         {lang === "eng" && (
//           <li key={Id} onClick={this.handleClick} className={hidden}>
//             <p className={this.state.active ? null : "hidden-p"}>
//               {this.capitalizeFirstLetter(words)}
//             </p>
//           </li>
//         )}
//       </React.Fragment>
//     );
//   }
// }
