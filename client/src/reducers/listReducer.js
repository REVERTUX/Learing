import {
  HANDLE_INPUT_CHANGE,
  SET_INVALID_VALUE,
  SET_SIDE_BAR_VALUE
} from "../actions/types";

const initialState = {
  isLoading: true,
  changeLang: false,
  showDelBtn: false,
  searches: "",
  globalSearch: "",
  engWord: "",
  invalidValue: false,
  sideBar: "hidden",
  tables: ["adjectives", "nouns", "phrases", "verbs", "adverbs_and_other"]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_INPUT_CHANGE: {
      return { ...state, [action.payload.name]: action.payload.value };
    }
    case SET_INVALID_VALUE: {
      return { ...state, invalidValue: action.payload };
    }
    case SET_SIDE_BAR_VALUE: {
      return { ...state, sideBar: action.payload };
    }
    default:
      return state;
  }
};
