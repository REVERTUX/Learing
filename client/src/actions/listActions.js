import {
  HANDLE_INPUT_CHANGE,
  SET_INVALID_VALUE,
  SET_SIDE_BAR_VALUE
} from "./types";

export const handleInputChange = e => dispatch => {
  const target = e.target;
  const value = target.type === "checkbox" ? target.checked : target.value;
  const name = target.name;
  dispatch({
    type: HANDLE_INPUT_CHANGE,
    payload: { name: name, value: value }
  });
};

export const setInvalidValue = value => dispatch => {
  dispatch({
    type: SET_INVALID_VALUE,
    payload: value
  });
};

export const setSideBarValue = value => dispatch => {
  dispatch({
    type: SET_SIDE_BAR_VALUE,
    payload: value
  });
};
// export const handleSubmit = e => dispatch => {
//   this.props.words.map(word => {
//     if (word.EngWord === this.state.engWord) {
//       e.preventDefault();
//       this.setState({
//         invalidValue: true
//       });
//     }
//   });
// };
