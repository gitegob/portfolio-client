import actionTypes from "./actionTypes";
import data from "../data.json";

export const getProjects = () => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.GET_PROJECTS,
    payload: {
      projects: data.projects,
    },
  });
};
