import Axios from "axios";
import { api } from "../../config/constants";

export const postContact = (data) => async (dispatch, getState) => {
  await Axios({
    method: 'POST',
    url: api.guest.postContact,
    headers: {
      'Content-Type': "application/json"
    },
    data
  });
};