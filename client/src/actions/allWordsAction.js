import {
  FETCH_ALL_WORDS,
  FETCH_ALL_WORDS_REJECTED,
  FETCH_ALL_WORDS_FULFILLED,
  SPLIT_ENG_WORDS,
  SPLIT_POL_WORDS,
  HANDLE_CLICK,
  SET_LENGTH
} from "./types";
import axios from "axios";

export const fetchAllWords = table => dispatch => {
  dispatch({ type: FETCH_ALL_WORDS });
  axios
    .post("/showWords", {
      table: table
    })
    .then(res => {
      res.data = shuffle(res.data);
      dispatch({
        type: FETCH_ALL_WORDS_FULFILLED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: FETCH_ALL_WORDS_REJECTED, payload: err });
    });
};

export const handleClick = e => (dispatch, getState) => {
  const { allWords } = getState();

  if (allWords.currentIndex === allWords.arrayLength) {
    return dispatch({
      type: HANDLE_CLICK,
      payload: -allWords.currentIndex
    });
  }

  if (e.target.name === "check") {
  } else if (e.target.name === "next") {
    return dispatch({
      type: HANDLE_CLICK,
      payload: 1
    });
  }
};

export const setLength = array => dispatch => {
  const length = array.length - 1;
  dispatch({
    type: SET_LENGTH,
    payload: length
  });
};

export const splitEng = array => dispatch => {
  let splitted = array.map(ele => ele.engWord.split(""));

  dispatch({
    type: SPLIT_ENG_WORDS,
    payload: splitted
  });
};

export const splitPol = array => dispatch => {
  let splitted = array.map(ele => ele.polWord.split(""));

  dispatch({
    type: SPLIT_POL_WORDS,
    payload: splitted
  });
};

const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};
