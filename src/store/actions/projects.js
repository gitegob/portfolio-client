import Axios from 'axios';
import { api } from "../../config/constants";
import actionTypes from "./actionTypes";

export const getProjects = () => async (dispatch, getState) => {
  const response = await Axios.get(api.guest.getProjects);
  dispatch({
    type: actionTypes.GET_PROJECTS,
    payload: {
      projects: response.data.data
    }
  });
};
