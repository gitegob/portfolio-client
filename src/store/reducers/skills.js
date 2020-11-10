import actionTypes from "../actions/actionTypes";

const initState = {
  skills: [],
};
const skillsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_SKILLS:
      return {
        ...state,
        skills: payload.skills
      };
    default:
      return state;
  }
};

export default skillsReducer;