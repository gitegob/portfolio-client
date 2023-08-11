import data from "../data.json";
import actionTypes from "./actionTypes";

export const getSkills = () => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.GET_SKILLS,
    payload: {
      skills: data.skills,
    },
  });
};
