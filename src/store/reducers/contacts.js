import actionTypes from "../actions/actionTypes";

const initState = {
  contacts: []
};

const contactsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_CONTACTS:
      return {
        ...state,
        contacts: payload.contacts
      };
    default:
      return state;
  }
};

export default contactsReducer;