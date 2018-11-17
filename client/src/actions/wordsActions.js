import {
  FETCH_WORDS,
  FETCH_WORDS_FULFILLED,
  FETCH_WORDS_REJECTED
} from "./types";
import axios from "axios";

export const fetchWords = table => dispatch => {
  dispatch({ type: FETCH_WORDS, payload: table });

  axios
    .post("/showWords", {
      table: table
    })
    .then(res => {
      dispatch({
        type: FETCH_WORDS_FULFILLED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: FETCH_WORDS_REJECTED, payload: err });
    });
};
