import { combineReducers } from "redux";
import wordsReducer from "./wordsReducer";
import listReducer from "./listReducer";
import allWordsReducer from "./allWordsReducer";

export default combineReducers({
  allWords: allWordsReducer,
  words: wordsReducer,
  list: listReducer
});
