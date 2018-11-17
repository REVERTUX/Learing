import {
  FETCH_ALL_WORDS,
  FETCH_ALL_WORDS_REJECTED,
  FETCH_ALL_WORDS_FULFILLED
} from "./types";
import axios from "axios";

export const fetchAllWords = table => dispatch => {
  dispatch({ type: FETCH_ALL_WORDS });
  axios
    .post("/showWords", {
      table: table
    })
    .then(res => {
      dispatch({
        type: FETCH_ALL_WORDS_FULFILLED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: FETCH_ALL_WORDS_REJECTED, payload: err });
    });
};
