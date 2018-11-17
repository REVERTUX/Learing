import {
  FETCH_WORDS,
  FETCH_WORDS_REJECTED,
  FETCH_WORDS_FULFILLED
} from "./../actions/types";

const initialState = {
  items: [],
  item: {},
  currentTable: "",
  fetching: false,
  fetched: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_WORDS: {
      return { ...state, fetching: true, currentTable: action.payload };
    }
    case FETCH_WORDS_REJECTED: {
      return { ...state, fetching: false, error: action.payload };
    }
    case FETCH_WORDS_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        items: action.payload
      };
    }

    default:
      return state;
  }
}
