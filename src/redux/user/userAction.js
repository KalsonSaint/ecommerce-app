import { UserActionTypes } from "./userTypes";

// const { SET_CURRENT_USER } = UserActionTypes;

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
