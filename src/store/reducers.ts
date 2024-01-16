import { CONSTANTS } from "../shared/constants";
import { initialUserState } from "./initialStates";

export const userReducer = (state = initialUserState, action) => {
  const { SET_USER } = CONSTANTS.ACTION_TYPES;
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
