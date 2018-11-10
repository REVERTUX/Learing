import React, { Component } from "react";
import FormRemove from "./FormRemove";
import Item from "./Item";
class ListItem extends Component {
  render() {
    const {
      words,
      isLoading,
      checkboxActive,
      search,
      table,
      listType
    } = this.props;

    const FilteredWords = words.filter(word => word.Type === listType);
    return (
      <div className="list">
        <h2>{listType}</h2>
        <ol>
          {!isLoading &&
            FilteredWords.map(word => (
              <Item
                ID={word.ID}
                words={word.PolWord}
                type={word.type}
                checkboxActive={checkboxActive}
                lang="pl"
                hidden={
                  search
                    ? word.EngWord.includes(search)
                      ? null
                      : "hidden"
                    : null
                }
              />
            ))}
        </ol>

        <ul>
          {!isLoading &&
            FilteredWords.map(word => (
              <Item
                ID={word.ID}
                words={word.EngWord}
                type={word.type}
                checkboxActive={checkboxActive}
                lang="eng"
                hidden={
                  search
                    ? word.EngWord.includes(search)
                      ? null
                      : "hidden"
                    : null
                }
              />
            ))}
        </ul>
        <ul className="btn-list">
          <FormRemove
            isLoading={isLoading}
            search={search}
            table={table}
            words={FilteredWords}
          />
        </ul>
      </div>
    );
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
