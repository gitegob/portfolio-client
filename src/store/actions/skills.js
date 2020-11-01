import Axios from "axios";
import { api } from "../../config/constants";
import actionTypes from "./types";

export const getSkills = () => async (dispatch, getState) => {
  const response = await Axios.get(api.guest.getSkills);
  dispatch({
    type: actionTypes.GET_SKILLS,
    payload: {
      skills: response.data.data
    }
  });
};