import {
  FETCH_ALL_WORDS,
  FETCH_ALL_WORDS_REJECTED,
  FETCH_ALL_WORDS_FULFILLED,
  SPLIT_ENG_WORDS,
  SPLIT_POL_WORDS,
  HANDLE_CLICK,
  SET_LENGTH
} from "./../actions/types";

const initialState = {
  allItems: [],
  items: [],
  polWordsSplitted: [],
  engWordsSplitted: [],
  arrayLength: 0,
  currentIndex: 0,
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
    case SPLIT_POL_WORDS: {
      return {
        ...state,
        polWordsSplitted: [...state.polWordsSplitted, ...action.payload]
      };
    }
    case SPLIT_ENG_WORDS: {
      return {
        ...state,
        engWordsSplitted: [...state.engWordsSplitted, ...action.payload]
      };
    }
    case HANDLE_CLICK: {
      return {
        ...state,
        currentIndex: state.currentIndex + action.payload
      };
    }
    case SET_LENGTH: {
      return {
        ...state,
        arrayLength: action.payload
      };
    }

    default:
      return state;
  }
}
