import Axios from 'axios';
import { api } from "../../config/constants";
import actionTypes from "./types";

export const getBlogs = () => async (dispatch, getState) => {
  const response = await Axios.get(api.guest.getBlogs + '?l=3');
  dispatch({
    type: actionTypes.GET_BLOGS,
    payload: {
      blogs: response.data.data
    }
  });
};

export const getAllBlogs = () => async (dispatch, getState) => {
  const response = await Axios.get(api.guest.getBlogs);
  dispatch({
    type: actionTypes.GET_BLOGS,
    payload: {
      blogs: response.data.data
    }
  });
};