import React, { Component } from "react";
import FormRemove from "./FormRemove";
import Item from "./Item";
class ListItem extends Component {
  render() {
    const {
      words,
      isLoading,
      checkboxLang,
      checkboxeDel,
      search,
      table
    } = this.props;

    return (
      <div className="list">
        <ol>
          {!isLoading &&
            words.map(word => (
              <Item
                key={word.ID}
                ID={word.ID}
                words={word.PolWord}
                type={word.type}
                checkboxActive={checkboxLang}
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
                key={word.ID}
                ID={word.ID}
                words={word.EngWord}
                type={word.type}
                checkboxActive={checkboxLang}
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
        {checkboxeDel && (
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
