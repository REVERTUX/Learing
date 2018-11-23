import {
  FETCH_ALL_WORDS,
  FETCH_ALL_WORDS_REJECTED,
  FETCH_ALL_WORDS_FULFILLED
} from "./../actions/types";

const initialState = {
  allItems: [],
  items: [],
  fetching: false,
  fetched: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_WORDS: {
      return { ...state, fetching: true };
    }
    case FETCH_ALL_WORDS_REJECTED: {
      return { ...state, fetching: false, error: action.payload };
    }
    case FETCH_ALL_WORDS_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        allItems: [...state.allItems, ...action.payload]
      };
    }

    default:
      return state;
  }
}
