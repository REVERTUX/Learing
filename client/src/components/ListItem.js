import React, { Component } from "react";
import FormRemove from "./FormRemove";
import Item from "./Item";
class ListItem extends Component {
  render() {
    const {
      words,
      isLoading,
      checkboxLang,
      checkboxDel,
      search,
      table
    } = this.props;

    return (
      <div className="list">
        <ol>
          {!isLoading &&
            words.map(word => (
              <Item
                ID={word.ID}
                words={word.PolWord}
                type={word.type}
                checkboxLang={checkboxLang}
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
            words.map(word => (
              <Item
                ID={word.ID}
                words={word.EngWord}
                type={word.type}
                checkboxLang={checkboxLang}
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
        {checkboxDel && (
          <ul className="btn-list">
            <FormRemove
              isLoading={isLoading}
              search={search}
              table={table}
              words={words}
            />
          </ul>
        )}
      </div>
    );
  }
}
export default ListItem;
